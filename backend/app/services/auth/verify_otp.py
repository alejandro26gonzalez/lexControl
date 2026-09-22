from datetime import datetime, timezone

from app.services.auth.password_reset import (validate_password_reset_otp_record)
from app.services.auth.recovery import (get_active_recovery_session)


MAX_FAILED_OTPS_PER_SESSION = 5

"""
Valida el OTP asociado a una sesión de recuperación.

Controla:
- Intentos del OTP actual.
- Cantidad de OTP agotados dentro de la sesión.
- Bloqueo de la sesión al alcanzar el límite.

No realiza commit.
La transacción es responsabilidad de la ruta.
"""
def verify_recovery_otp(recovery_token, otp):
    
    recovery_session = get_active_recovery_session(recovery_token)
    
    if not recovery_session:
        return (
            False,
            None,
            None,
            0,
            False,
            False,
            "Sesión de recuperación inválida o expirada."
        )
        
    if recovery_session.otp_verified_at is not None:
        return (
            False,
            recovery_session,
            None,
            0,
            False,
            False,
            "El OTP ya fue validado."
        )
    
    (
        valid, 
        otp_record,
        remaining_attempts,
        otp_exhausted, 
        message
        ) = (
        validate_password_reset_otp_record(
            recovery_session.user_id,
            otp
        )
    )
    
    if not valid:
        
        if otp_exhausted:
            
            recovery_session.failed_otp_count += 1
            
            failed_otps = recovery_session.failed_otp_count
            
            if failed_otps >= MAX_FAILED_OTPS_PER_SESSION:
                
                recovery_session.bloked_at = datetime.now(timezone.utc)
                
                return (
                    False,
                    recovery_session,
                    otp_record,
                    0,
                    True,
                    True,
                    "Se alcanzó el límite de OTP incorrectos para esta sesión."
                )
                
            return (
                False,
                recovery_session,
                otp_record,
                0,
                True,
                False,
                "Número máximo de intentos alcanzados."
            )
        
        return (
            False,
            recovery_session,
            otp_record,
            remaining_attempts,
            False,
            False,
            message
        )
    
    now = datetime.now(timezone.utc)
    
    #el OTP ya cumplio su funcion
    otp_record.used_at = now
    
    #la sesion ya queda autorizada para cambiar la contraseña
    recovery_session.otp_verified_at = now
    
    return (
        True,
        recovery_session,
        otp_record,
        remaining_attempts,
        False,
        False,
        "OTP validado correctamente."
    )