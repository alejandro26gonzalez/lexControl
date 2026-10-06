from flask import current_app, request
from app import db
from app.routes.auth.registration import register_bp
from app.helpers.alertCodes import auth_error, auth_success
from app.services.auth.password_policy import validate_password
from app.services.registration.registration import create_registration_session, get_active_registration_session_by_email, resume_registration_session
from app.services.users.users import get_user_by_email
from werkzeug.security import check_password_hash, generate_password_hash




@register_bp.route("", methods=["POST"])
def register():

    data = request.get_json()


    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )

    name = data.get("name")
    last_name = data.get("last_name")
    identification_type = data.get("identification_type")
    identification_number = data.get("identification_number")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    if not name or not last_name:
        return auth_error(
            "Nombres y apellidos son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    if not identification_number or not identification_type:
        return auth_error(
            "Número y tipo de identificación son obligatorios.",
            "AUTH_DATA_REQUIRED",
            400
        )

    if not email:
        return auth_error(
                "El correo es obligatorio.",
                "AUTH_DATA_REQUIRED",
                400
            )

    if not password:
        return auth_error(
                "La contraseña es obligatoria.",
                "AUTH_DATA_REQUIRED",
                400
            )

    if not confirm_password:
        return auth_error(
                "La confirmación de la contraseña es obligatoria.",
                "AUTH_DATA_REQUIRED",
                400
            )

    email = email.strip().lower()

    # 1. Verificar si ya existe un usuario confirmado

    if existing_user := get_user_by_email(email):
        return auth_error(
                "El correo electrónico brindado ya está registrado.",
                "EMAIL_ALREADY_REGISTERED",
                409
            )
    
    
    if active_registration := get_active_registration_session_by_email(email):
        # -----------------------------------------
        # Verificar que la contraseña corresponde
        # a la sesión de registro existente
        # -----------------------------------------
        
        if not check_password_hash(
            active_registration.password_hash,
            password
        ):
            
            return auth_error(
                "No fue posible reanudar el proceso de registro.",
                "REGISTRATION_RESUME_FAILED",
                403
            )
        # -----------------------------------------
        # Rotar token de la sesión existente
        # -----------------------------------------   
        registration_token, registration_session = (
            resume_registration_session(
                active_registration
            )
        )
        
        
        # -----------------------------------------
        # Determinar en qué paso debe continuar
        # -----------------------------------------
        
        if registration_session.completed_at is not None:
            registration_step = "complete"
            
        elif registration_session.otp_verified_at is not None:
            registration_step = "create_account"    
            
        elif registration_session.otp_requests_count > 0:
            registration_step = "verify_otp"
            
        else :
            registration_step = "profile"
        
        db.session.commit()
        
        # -----------------------------------------
        # Datos que el frontend puede recuperar
        # -----------------------------------------
        
        registration_data = {
            "name": registration_session.name,
            "last_name": registration_session.last_name,
            "identification_type": (
                registration_session.identification_type
            ),
            "identification_number": (
                registration_session.identification_number
            ),
            "email": registration_session.email,
            "phone": registration_session.phone,
            "city": registration_session.city,
            "position": registration_session.position,
            "specialty": registration_session.specialty,
            "professional_card": (
                registration_session.professional_card
            )
        }
        
        # -----------------------------------------
        # Respuesta al frontend
        # -----------------------------------------

        response, status = auth_success(
            "Se encontró un proceso de registro activo.",
            "REGISTRATION_IN_PROGRESS",
            200,
            registration_step=registration_step,
            registration=registration_data
        )

        # -----------------------------------------
        # Renovar cookie HttpOnly
        # -----------------------------------------

        response.set_cookie(
            "registration_token",
            registration_token,
            httponly=True,
            secure=current_app.config["ENVIRONMENT"] != "development",
            samesite="Lax",
            max_age=600
        )
        
        

        return response, status

    # 2. Verificar coincidencia de contraseñas
    if password != confirm_password:
        return auth_error(
            "Las contraseñas no coinciden.",
            "PASSWORD_MISMATCH",
            400
        )

    # 3. Validar política de contraseña
    password_valid, password_errors = validate_password(
        password=password,
        user_email=email
    )

    if not password_valid:
        return auth_error(
            "La contraseña no cumple con los requisitios de seguridad.",
            "PASSWORD_POLICY_INVALID",
            400,
            password_errors = password_errors
        )

    try:

        # 4. Generar hash de contraseña
        password_hash = generate_password_hash(
            password
        )

        # 5. Crear sesión temporal de registro
        registration_token, registration_session = (
            create_registration_session(
                email=email,
                password_hash=password_hash,
                name=name.strip(),
                last_name=last_name.strip(),
                identification_type=identification_type.strip(),
                identification_number=identification_number.strip()
            )
        )
        
        #6. confirmar la sesión en postrgresql
        db.session.commit()

        response, status = auth_success(
            "Registro iniciado correctamente, continúa con la información de tu perfil.",
            "REGISTRATION_STARTED"
        )

        response.set_cookie(
            "registration_token",
            registration_token,
            httponly=True,
            secure=current_app.config["ENVIRONMENT"] != "development",
            samesite="Lax",
            max_age=600
        )

        return response, 201

    except Exception:
        db.session.rollback()

        return auth_error(
            "No fue posible iniciar el registro.",
            "REGISTRATION_START_FAILED",
            500
        )