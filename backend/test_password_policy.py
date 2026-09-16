from app import create_app
from app.helpers.password_policy import validate_password


app = create_app()


def test(password, email="client@lexcontrol.local"):
    valid, errors = validate_password(
        password,
        email
    )

    print(f"\nContraseña: {password}")
    print("Válida:", valid)

    if errors:
        for error in errors:
            print(" -", error)


with app.app_context():

    print("\n=== PRUEBA 1: CONTRASEÑA VÁLIDA ===")
    test("Abcdef12#$")

    print("\n=== PRUEBA 2: MENOS DE 10 ===")
    test("Abc12#$")

    print("\n=== PRUEBA 3: SIN MAYÚSCULA ===")
    test("abcdef12#$")

    print("\n=== PRUEBA 4: SIN MINÚSCULA ===")
    test("ABCDEF12#$")

    print("\n=== PRUEBA 5: SIN NÚMERO ===")
    test("Abcdefgh#$")

    print("\n=== PRUEBA 6: SIN SÍMBOLO ===")
    test("Abcdefgh12")

    print("\n=== PRUEBA 7: MÁS DE 20 ===")
    test("Abcdefghijklmnop12345#$")

    print("\n=== PRUEBA 8: 4 NÚMEROS CONSECUTIVOS ===")
    test("Abc1234#$xy")

    print("\n=== PRUEBA 9: CARÁCTER NO PERMITIDO ===")
    test("Abcdef12$# ")

    print("\n=== PRUEBA 10: IDENTIFICADOR DEL USUARIO ===")
    test("Client123#$A")