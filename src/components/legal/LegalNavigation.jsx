import {
    Navigation,
    NavigationTitle,
    NavigationList,
    NavigationItem,
    NavigationButton,
    NavigationIcon,
    NavigationText,
    HelpCard,
    HelpIcon,
    HelpTitle,
    HelpText,
    HelpButton
} from "../../styles/components/legalContentTemplate.styles";
import { FiShield } from "react-icons/fi";
import { FcBriefcase, FcSafe, FcAcceptDatabase } from "react-icons/fc";

const iconMap = {
    terms: FcBriefcase,
    privacy: FcSafe,
    data: FcAcceptDatabase
}

const LegalNavigation = ({
    sections,
    activeSection,
    onSectionChange,
}) => {
    return (
        <Navigation>

            <NavigationTitle>
                Documentación legal
            </NavigationTitle>

            <NavigationList>
                {sections.map((section) => {
                    const Icon = iconMap[section.id];

                    const isActive = activeSection === section.id;

                    return (
                        <NavigationItem key={section.id}>
                            <NavigationButton
                                type="button"
                                $active={isActive}
                                onClick={() => onSectionChange(section.id)}
                            >
                                <NavigationIcon $active={isActive}>
                                    <Icon />
                                </NavigationIcon>

                                <NavigationText>
                                    {section.shortTitle}
                                </NavigationText>
                            </NavigationButton>
                        </NavigationItem>
                    );
                })}
            </NavigationList>

            <HelpCard>
                <HelpIcon>
                    <FiShield />
                </HelpIcon>

                <HelpTitle>
                    ¿Tienes preguntas?
                </HelpTitle>

                <HelpText>
                    Estamos aquí para ayudarte.
                </HelpText>

                <HelpButton to="/contact">
                    Contáctanos
                </HelpButton>
            </HelpCard>

        </Navigation>
    );
};

export default LegalNavigation;