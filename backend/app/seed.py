from app import create_app, db
from app.models import User, Role, UserRole

ROLES =[
    "CLIENT",
    "COLLABORATOR",
    "ADMIN"
]

USERS = [
    {
        "email": "client@lexcontrol.local",
        "password": "Client123!",
        "role": "CLIENT"
    },
    {
        "email": "collaborator@lexcontrol.local",
        "password": "Collaborator123!",
        "role": "COLLABORATOR"
    },
    {
        "email": "admin@lexcontrol.local",
        "password": "Admin123!",
        "role": "ADMIN"
    }
]

def seed_roles():
    roles = {}
    
    for role_name in ROLES:
        role = Role.query.filter_by(
            name = role_name
        ).first()
        
        if not role:
            role = Role(name = role_name)
            db.session.add(role)
            db.session.flush()
            
            print(f"Rol creado: {role_name}")
            
        else:
            print(f"Rol ya existe: {role_name}")
            
        roles[role_name] = role
        
    return roles

def seed_users(roles):
    
    for data in USERS:
        
        user = User.query.filter_by(
            email = data['email']
        ).first()
        
        if not user:
            user = User(
                email=data['email']
            )
            
            user.set_password(data['password'])
            
            db.session.add(user)
            db.session.flush()
            
            print(f"Usuario creado: {data['email']}")
            
        else:
            print(f"Usuario ya existe: {data['email']}")
            
        role = roles[data['role']]
        
        user_role = UserRole.query.filter_by(
            user_id=user.id,
            role_id=role.id
        ).first()
        
        if not user_role:
            user_role = UserRole(
                user_id=user.id,
                role_id=role.id
            )
            
            db.session.add(user_role)
            
            print(
                f"Rol {data['role']} asignado a {data['email']}"
            )
        else:
            print(
                f"Rol {data['role']} ya asignado a {data['email']}"
            )
        
        

def seed():
    try: 
        roles = seed_roles()
        seed_users(roles)
        
        db.session.commit()
        
        print("Seed ejecutado correctamente.")
        
    except Exception as error:
        db.session.rollback()
        
        print("Error ejecuntando seed: ")
        print(error)
        
        raise
    
app = create_app()

with app.app_context():
    seed()