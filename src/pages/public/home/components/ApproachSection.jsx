import Button from "../../../../components/button/Button";
import SectionHeader from "../../../../components/hero/SectionHeader";

import {
    ApproachSectionContainer,
    ApproachGrid,
    ApproachIntro,
    ApproachFeatures,
    ApproachFeature,
    ApproachFeatureIcon,
    ApproachFeatureContent,
    ApproachFeatureTitle,
    ApproachFeatureDescription,
    ApproachVisual,
    ApproachImage,
    ApproachOverlay,
    ApproachQuote,
    ApproachQuoteLine
} from "../../../../styles/components/approachSection.styles";

const ApproachSection = ({ config }) => {
    return (
        <ApproachSectionContainer>
            <ApproachGrid>

                <ApproachIntro>
                    <SectionHeader
                        eyebrow={config.eyebrow}
                        title={config.title}
                        size="medium"
                    />

                    <p>{config.description}</p>

                    <Button
                        to={config.action.path}
                        variant="primary"
                    >
                        {config.action.label}
                    </Button>
                </ApproachIntro>

                <ApproachFeatures>
                    {config.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <ApproachFeature key={feature.id}>
                                <ApproachFeatureIcon>
                                    <Icon />
                                </ApproachFeatureIcon>

                                <ApproachFeatureContent>
                                    <ApproachFeatureTitle>
                                        {feature.title}
                                    </ApproachFeatureTitle>

                                    <ApproachFeatureDescription>
                                        {feature.description}
                                    </ApproachFeatureDescription>
                                </ApproachFeatureContent>
                            </ApproachFeature>
                        );
                    })}
                </ApproachFeatures>

                <ApproachVisual>
                    <ApproachImage
                        src={config.image}
                        alt={config.imageAlt}
                    />

                    <ApproachOverlay />

                    <ApproachQuote>
                        <span>{config.quote}</span>
                        <ApproachQuoteLine />
                    </ApproachQuote>
                </ApproachVisual>

            </ApproachGrid>
        </ApproachSectionContainer>
    );
};

export default ApproachSection;