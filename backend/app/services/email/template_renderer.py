from flask import render_template, current_app

def render_email_template(
    template_name: str,
    **context
) -> str:
    
    context.setdefault(
        "logo_url",
        current_app.config["EMAIL_LOGO_URL"]
    )
    
    return render_template(
        f"email/{template_name}",
        **context
    )