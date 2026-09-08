import { useState } from 'react';

import Container from '../container/Container';
import SectionHeader from '../hero/SectionHeader';
import SpecialtyModal from '../specialtyModal/SpecialtyModal';
import Button from "../button/Button";

import {
    SpecialtiesSection,
    SpecialtiesHeader,
    SpecialtiesGridContainer,
    SpecialtyCard,
    SpecialtyImageWrapper,
    SpecialtyImage,
    SpecialtyIcon,
    SpecialtyImageContainer,
    SpecialtyContent,
    SpecialtyTitle,
    SpecialtyDescription,
} from '../../styles/components/specialtiesGrid.styles';

const SpecialtiesGrid = ({ config }) => {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const handleOpenSpecialty = (specialty) => {
        setSelectedSpecialty(specialty);
    };

    return (
        <SpecialtiesSection>
            <Container>

                {(config.eyebrow || config.title) && (
                    <SpecialtiesHeader>
                        <SectionHeader
                            eyebrow={config.eyebrow}
                            title={config.title}
                            size="medium"
                        />
                    </SpecialtiesHeader>
                )}

                <SpecialtiesGridContainer>
                    {config.specialties.map((specialty) => {
                        const Icon = specialty.icon;

                        return (
                            <SpecialtyCard key={specialty.id}>
                                <SpecialtyImageWrapper>
                                    <SpecialtyImageContainer>
                                        <SpecialtyImage
                                            src={specialty.image}
                                            alt={specialty.title}
                                        />
                                    </SpecialtyImageContainer>

                                    <SpecialtyIcon>
                                        <Icon />
                                    </SpecialtyIcon>
                                </SpecialtyImageWrapper>

                                <SpecialtyContent>
                                    <SpecialtyTitle>
                                        {specialty.title}
                                    </SpecialtyTitle>

                                    <SpecialtyDescription>
                                        {specialty.description}
                                    </SpecialtyDescription>

                                    <Button
                                        variant='textArrow'
                                        onClick={() =>
                                            handleOpenSpecialty(specialty)
                                        }
                                    >
                                        Conoce más
                                    </Button>
                                    
                                </SpecialtyContent>
                            </SpecialtyCard>
                        );
                    })}
                </SpecialtiesGridContainer>

                {selectedSpecialty && (
                    <SpecialtyModal 
                    specialty={selectedSpecialty}
                    onClose={() => setSelectedSpecialty(null)}
                    />
                )}

            </Container>
        </SpecialtiesSection>
    );
};

export default SpecialtiesGrid;