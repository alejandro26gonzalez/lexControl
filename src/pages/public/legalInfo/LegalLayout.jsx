import { useState } from "react";
import Hero from "../../../components/hero/Hero";
import { legalInfoConfig } from "../../../config/pages/legalInfo";
import GlobalContainer from "../../../styles/GlobalContainer";
import Container from "../../../components/container/Container";
import LegalNavigation from "../../../components/legal/LegalNavigation";
import LegalContentTemplate from "../../../components/legal/LegalContentTemplate";

import { LegalContentLayout } from "../../../styles/components/legalContentTemplate.styles";
import {
    Features,
    Feature,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription
} from "../../../styles/components/contactLocation.styles";

const LegalLayout = () => {

    const [activeSection, setActiveSection] = useState(legalInfoConfig.sections[0].id);

    const currentSection = legalInfoConfig.sections.find(
        (section) => section.id === activeSection
    );
    

    return (
        <GlobalContainer>

            <Hero 
            {...legalInfoConfig.hero}
            />

            

            <Container>
                <LegalContentLayout>
                    <LegalNavigation
                        sections={legalInfoConfig.sections}
                        activeSection={activeSection}
                        onSectionChange={setActiveSection}
                    />

                    <LegalContentTemplate
                        section={currentSection}
                    />
                </LegalContentLayout>
            </Container>

            <Features>
                {legalInfoConfig.features.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Feature key={item.id}>
                            <FeatureIcon>
                                <Icon />
                            </FeatureIcon>

                            <FeatureTitle>
                                {item.title}
                            </FeatureTitle>

                            <FeatureDescription>
                                {item.text}
                            </FeatureDescription>
                        </Feature>
                    );
                })};
            </Features>
        
        </GlobalContainer>
    )
};

export default LegalLayout;