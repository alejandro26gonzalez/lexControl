from abc import ABC, abstractmethod


class BaseProvider(ABC):

    @abstractmethod
    def get_authorization_url(self, state, nonce):
        """
        Genera la URL de autorización del proveedor.

        Args:
            state: Valor aleatorio utilizado para proteger
                   el flujo OAuth contra CSRF.

        Returns:
            str: URL de autorización.
        """
        pass

    @abstractmethod
    def exchange_code(self, code, nonce):
        """
        Intercambia el authorization code por los tokens
        proporcionados por el proveedor.

        Args:
            code: Authorization code recibido en el callback.

        Returns:
            dict: Información de tokens proporcionada por el proveedor.
        """
        pass

    @abstractmethod
    def get_identity(self, token):
        """
        Obtiene y normaliza la identidad del usuario
        autenticado por el proveedor.

        Args:
            token: Token obtenido durante el intercambio OAuth.

        Returns:
            dict: Identidad normalizada del proveedor.
        """
        pass