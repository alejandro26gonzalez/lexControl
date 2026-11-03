
class ValidationError(Exception):
    def __init__(self, errors):
        self.errors = errors
        super().__init__("Error de validación.")


class DuplicateResourceError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(message)


class ResourceNotFoundError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(message)
