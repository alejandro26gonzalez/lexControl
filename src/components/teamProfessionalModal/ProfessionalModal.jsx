import { useEffect } from 'react';
import { FiBriefcase, FiCheckCircle, FiX } from 'react-icons/fi';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';

import {
    ModalOverlay,
    ModalContainer,
    ModalClose,
    ModalHeader,
    ModalImageWrapper,
    ModalImage,
    ModalHeaderContent,
    ModalEyebrow,
    ModalName,
    ModalSpecialty,
    LinkedInButton,
    ModalBody,
    ModalSection,
    ModalSectionTitle,
    ModalDescription,
    PracticeAreas,
    PracticeArea,
    Experience,
    EducationList,
    EducationItem,
    EducationDegree,
    EducationInstitution,
} from '../../styles/components/teamProfessionalModal.styles';

const ProfessionalModal = ({ member, onClose }) => {
    useLockBodyScroll(Boolean(member));

    useEffect(() => {
        if (!member) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [member, onClose]);

    if (!member) return null;

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalOverlay onClick={handleOverlayClick}>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="professional-modal-title"
            >
                <ModalClose
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar perfil"
                >
                    <FiX />
                </ModalClose>

                <ModalHeader>
                    <ModalImageWrapper>
                        <ModalImage
                            src={member.image}
                            alt={member.name}
                        />
                    </ModalImageWrapper>

                    <ModalHeaderContent>
                        <ModalEyebrow>
                            {member.role}
                        </ModalEyebrow>

                        <ModalName id="professional-modal-title">
                            {member.name}
                        </ModalName>

                        <ModalSpecialty>
                            <FiBriefcase />
                            {member.specialty}
                        </ModalSpecialty>

                        {member.linkedin && (
                            <LinkedInButton
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>in</span>
                                LinkedIn
                            </LinkedInButton>
                        )}
                    </ModalHeaderContent>
                </ModalHeader>

                <ModalBody>
                    <ModalSection>
                        <ModalSectionTitle>
                            Perfil profesional
                        </ModalSectionTitle>

                        <ModalDescription>
                            {member.profile}
                        </ModalDescription>
                    </ModalSection>

                    {member.practiceAreas?.length > 0 && (
                        <ModalSection>
                            <ModalSectionTitle>
                                Áreas de práctica
                            </ModalSectionTitle>

                            <PracticeAreas>
                                {member.practiceAreas.map((area) => (
                                    <PracticeArea key={area}>
                                        <FiCheckCircle />
                                        {area}
                                    </PracticeArea>
                                ))}
                            </PracticeAreas>
                        </ModalSection>
                    )}

                    {member.experience && (
                        <ModalSection>
                            <ModalSectionTitle>
                                Experiencia
                            </ModalSectionTitle>

                            <Experience>
                                {member.experience}
                            </Experience>
                        </ModalSection>
                    )}

                    {member.education?.length > 0 && (
                        <ModalSection>
                            <ModalSectionTitle>
                                Formación académica
                            </ModalSectionTitle>

                            <EducationList>
                                {member.education.map((item) => (
                                    <EducationItem key={item.id}>
                                        <EducationDegree>
                                            {item.degree}
                                        </EducationDegree>

                                        <EducationInstitution>
                                            {item.institution}
                                        </EducationInstitution>
                                    </EducationItem>
                                ))}
                            </EducationList>
                        </ModalSection>
                    )}
                </ModalBody>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default ProfessionalModal;