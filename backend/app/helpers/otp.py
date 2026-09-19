import hashlib
import secrets 
import string


OTP_LENGTH = 8

OTP_ALPHABET = (
    string.ascii_uppercase.replace("O", "").replace("I", "")
    + string.ascii_lowercase.replace("o", "").replace("i", "").replace("l", "")
    + string.digits.replace("0", "").replace("1", "")
)

def generate_otp():
    return "".join(
        secrets.choice(OTP_ALPHABET)
        for _ in range(OTP_LENGTH)
    )
    
def generate_salt():
    return secrets.token_hex(16)

def hash_otp(otp, salt):
    value = f"{salt}{otp}".encode("utf-8")
    return hashlib.sha256(value).hexdigest()

def verify_otp(otp, salt, expected_hash):
    calculated_hash = hash_otp(otp, salt)
    return secrets.compare_digest(
        calculated_hash,
        expected_hash
    )