import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';

import {
    ModalOverlay,
    ModalContainer,
    ModalCloseButton,
    ModalHeader,
    ModalImageWrapper,
    ModalImage,
    ModalHeaderContent,
    ModalIcon,
    ModalEyebrow,
    ModalTitle,
    ModalDescription,
    ModalBody,
    SubcategoriesTitle,
    SubcategoriesGrid,
    Subcategory,
    SubcategoryTitle,
    SubcategoryDescription,
} from '../../styles/components/specialtyModal.styles';

const SpecialtyModal = ({ specialty, onClose }) => {
    useLockBodyScroll(Boolean(specialty));

    useEffect(() => {
        if (!specialty) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [specialty, onClose]);

    if (!specialty) return null;

    const Icon = specialty.icon;

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalOverlay
            onMouseDown={handleOverlayClick}
            role="presentation"
        >
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="specialty-modal-title"
            >
                <ModalCloseButton
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar información de especialidad"
                >
                    <FiX />
                </ModalCloseButton>

                <ModalHeader>
                    <ModalImageWrapper>
                        <ModalImage
                            src={specialty.image}
                            alt={specialty.title}
                        />
                    </ModalImageWrapper>

                    <ModalHeaderContent>
                        <ModalIcon>
                            <Icon />
                        </ModalIcon>

                        <ModalEyebrow>
                            ESPECIALIDAD JURÍDICA
                        </ModalEyebrow>

                        <ModalTitle id="specialty-modal-title">
                            {specialty.title}
                        </ModalTitle>

                        <ModalDescription>
                            {specialty.description}
                        </ModalDescription>
                    </ModalHeaderContent>
                </ModalHeader>

                <ModalBody>
                    <SubcategoriesTitle>
                        Áreas de especialización
                    </SubcategoriesTitle>

                    <SubcategoriesGrid>
                        {specialty.subcategories?.map((subcategory) => (
                            <Subcategory key={subcategory.id}>
                                <SubcategoryTitle>
                                    {subcategory.title}
                                </SubcategoryTitle>

                                <SubcategoryDescription>
                                    {subcategory.description}
                                </SubcategoryDescription>
                            </Subcategory>
                        ))}
                    </SubcategoriesGrid>
                </ModalBody>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default SpecialtyModal;