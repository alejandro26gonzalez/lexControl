from app import db
from flask import request
from app.helpers.alertCodes import auth_error, auth_success
from app.routes.auth.registration import register_bp
from app.services.otp.otp_email_service import send_otp_email
from app.services.registration.registration import get_active_registration_session, update_registration_profile
from app.services.registration.registration_otp import create_registration_otp



@register_bp.route("/profile", methods=["POST"])
def register_profile():

    data = request.get_json()

    if not data:
        return auth_error(
            "Datos requeridos.",
            "AUTH_DATA_REQUIRED",
            400
        )
        
    # -----------------------------------------
    # Obtener token de registro
    # -----------------------------------------
    
    registration_token = request.cookies.get(
        "registration_token"
    )
    
    if not registration_token:
        return auth_error(
            "Sesión de registro inválida o expirada.",
            "REGISTRATION_SESSION_INVALID",
            400
        )
    # -----------------------------------------
    # Obtener datos del perfil
    # -----------------------------------------   
    
    phone = data.get("phone")
    city = data.get("city")
    position = data.get("position")
    specialty = data.get("specialty")
    professional_card = data.get("professional_card")
    
    try:
            # -----------------------------------------
            # buscar la misma sesion creada en fase 1
            # -----------------------------------------
        
        registration_session = (
            get_active_registration_session(
                registration_token
            )
        )
        
        if not registration_session:
            return auth_error(
                    "Sesión de registro inválida o expirada.",
                    "REGISTRATION_SESSION_INVALID",
                    400
                )
            
            # -----------------------------------------
            # verificar que el correo todavia no ha sido verificado
            # -----------------------------------------        
        
        if registration_session.otp_verified_at is not None:
            return auth_error(
                "El correo electrónico ya fue verificado.",
                "EMAIL_ALREADY_VERIFIED",
                400
            )
            
        # -----------------------------------------
        # Actualizar la misma RegistrationSession
        # -----------------------------------------
        
        update_registration_profile(
            registration_session=registration_session,
            phone=phone,
            city=city,
            position=position,
            specialty=specialty,
            professional_card=professional_card
        )
        
        # -----------------------------------------
        # Generar OTP asociado a la sesión
        # -----------------------------------------
        
        otp, otp_record = create_registration_otp(
            registration_session.id
        )        
        
        registration_session.otp_requests_count += 1
        
        # -----------------------------------------
        # Confirmar cambios
        # -----------------------------------------
        
        db.session.commit()
        
        
        # -----------------------------------------
        # Enviar código por email
        # -----------------------------------------
        
        send_otp_email(
            email=registration_session.email,
            name=registration_session.name,
            otp=otp,
            purpose="registration",
            context="new"
        )        
        
        return auth_success(
            "Información del perfil guardada correctamente. Se generó un código de verificación.",
            "REGISTRATION_PROFILE_SAVED",
            200
        )
        
    except Exception as error:
        
        db.session.rollback()

        print("ERROR REGISTER PROFILE:", error)

        return auth_error(
            "No fue posible guardar la información del perfil.",
            "PROFILE_VALIDATION_FAILED",
            500
        )