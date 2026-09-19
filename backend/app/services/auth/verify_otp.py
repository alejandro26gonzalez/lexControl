from datetime import datetime, timezone

from app.services.auth.password_reset import (validate_password_reset_otp_record)
from app.services.auth.recovery import (get_active_recovery_session)

"""
Valida el OTP asociado a una sesion de recuperacion y marca ambas operaciones como verificadas/consumidas.

No realiza commit. La transacción es responsabilidad de la ruta.
"""


def verify_recovery_otp(recovery_token, otp):
    
    recovery_session = get_active_recovery_session(recovery_token)
    
    if not recovery_session:
        return (
            False,
            None,
            None,
            "Sesión de recuperación inválida o expirada."
        )
    if recovery_session.otp_verified_at is not None:
        return (
            False,
            recovery_session,
            None,
            "El OTP ya fue validado."
        )
    
    valid, otp_record, message = (
        validate_password_reset_otp_record(
            recovery_session.user_id,
            otp
        )
    )
    
    if not valid:
        return (
            False,
            recovery_session,
            otp_record,
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
        "OTP validado correctamente."
    )