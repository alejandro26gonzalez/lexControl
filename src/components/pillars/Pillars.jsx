import SectionHeader from "../hero/SectionHeader";
import Container from "../container/Container";

import {
    PillarsSection,
    PillarsHeader,
    PillarsGrid,
    PillarCard,
    PillarIcon,
    PillarTitle,
    PillarDescription,
} from '../../styles/components/pillars.styles';

const Pillars = ({ config }) => {
    return (
        <PillarsSection>

            <PillarsHeader>
                <SectionHeader
                    eyebrow={config.eyebrow}
                    title={config.title}
                    variant="dark"
                    size="medium"
                    align="center"
                />
            </PillarsHeader>

            <Container>

                <PillarsGrid>
                    {config.pillars.map((pillar) => {
                        const Icon = pillar.icon;

                        return (
                            <PillarCard key={pillar.id}>

                                <PillarIcon>
                                    <Icon />
                                </PillarIcon>

                                <PillarTitle>
                                    {pillar.title}
                                </PillarTitle>

                                <PillarDescription>
                                    {pillar.description}
                                </PillarDescription>

                            </PillarCard>
                        );
                    })}
                </PillarsGrid>
            
            </Container>


        </PillarsSection>
    );
};

export default Pillars;