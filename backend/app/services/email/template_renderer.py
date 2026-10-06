from flask import render_template

def render_email_template(
    template_name: str,
    **context
) -> str:
    
    return render_template(
        f"email/{template_name}",
        **context
    )