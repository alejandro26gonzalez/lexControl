from abc import ABC, abstractmethod

class EmailService(ABC):
    
    @abstractmethod
    def send_email(
        self,
        to: str,
        subject: str,
        html: str,
        text: str | None = None
    ):
        pass