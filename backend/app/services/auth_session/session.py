from datetime import datetime, timezone, timedelta

from flask import session

from app import db
from app.models import Session

from app.services import (
    generate_session_token,
    hash_session_token
)

NORMAL_SESSION_DURATION = timedelta(hours=6)
REMEMBERED_SESSION_DURATION = timedelta(hours=48)

def create_user_session(
    user_id,
    remember_me=False
):
    
    session.clear()
    
    raw_token = generate_session_token()
    hash_token = hash_session_token(raw_token)
    
    now = datetime.now(timezone.utc)
    
    session_duration = (
        REMEMBERED_SESSION_DURATION
        if remember_me
        else NORMAL_SESSION_DURATION
    )
    
    new_session = Session(
        user_id=user_id,
        session_token_hash=hash_token,
        created_at=now,
        expires_at=now + session_duration
    )
    
    db.session.add(new_session)
    db.session.commit()
    
    session["session_token"] = raw_token
    
    return new_session