import Button from "../../../../components/button/Button";
import SectionHeader from "../../../../components/hero/SectionHeader";
import {
    SpecialtiesSection,
    SpecialtiesHeader,
    SpecialtiesHeaderContent,
    SpecialtiesAction,
    SpecialtiesGrid,
    SpecialtyCard,
    SpecialtyIcon,
    SpecialtyTitle,
    SpecialtyDescription,
} from "../../../../styles/components/specialtiesPreview.styles";

const SpecialtiesPreview = ({config}) => {
    return (
        <SpecialtiesSection>

            <SpecialtiesHeader>

                <SpecialtiesHeaderContent>
                    <SectionHeader
                        eyebrow={config.eyebrow}
                        title={config.title}
                        size="medium"
                    />
                </SpecialtiesHeaderContent>

                <SpecialtiesAction>
                    <p>
                        {config.description}
                    </p>

                    <Button
                        to={config.action.path}
                        variant="textArrow"
                    >
                        {config.action.label}
                    </Button>
                </SpecialtiesAction>

            </SpecialtiesHeader>

            <SpecialtiesGrid>
                {config.areas.map((area) => {
                    const Icon = area.icon;

                    return (
                        <SpecialtyCard key={area.id}>

                            <SpecialtyIcon>
                                <Icon />
                            </SpecialtyIcon>

                            <SpecialtyTitle>
                                {area.title}
                            </SpecialtyTitle>

                            <SpecialtyDescription>
                                {area.description}
                            </SpecialtyDescription>

                        </SpecialtyCard>
                    )
                })}
            </SpecialtiesGrid>

        </SpecialtiesSection>

    )
};
export default SpecialtiesPreview;