import Button from "../button/Button";
import SectionHeader from "../hero/SectionHeader";

import {
    ContentSplitSection,
    ContentSplitGrid,
    ContentColumn,
    ContentBody,
    Paragraph,
    FeaturesList,
    Feature,
    FeatureIcon,
    FeatureLabel,
    ActionWrapper,
    VisualColumn,
    ImageWrapper,
    Image,
    Badge,
    BadgeMark,
    BadgeQuote,
    BadgeLogo,
    BadgeLine,
} from '../../styles/components/contentSplit.styles';

const ContentSplit = ({ config }) => {
    const {
        eyebrow,
        title,
        paragraphs = [],
        features = [],
        action,
        image,
        imageAlt,
        imagePosition = 'right',
        badge,
    } = config;

    return (
        <ContentSplitSection>
            <ContentSplitGrid>

                <ContentColumn $imagePosition={imagePosition}>
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={title}
                        size="medium"
                    />

                    <ContentBody>
                        {paragraphs.map((paragraph, index) => (
                            <Paragraph key={index}>
                                {paragraph}
                            </Paragraph>
                        ))}

                        {features.length > 0 && (
                            <FeaturesList>
                                {features.map((feature) => {
                                    const Icon = feature.icon;

                                    return (
                                        <Feature key={feature.id}>
                                            <FeatureIcon>
                                                <Icon />
                                            </FeatureIcon>

                                            <FeatureLabel>
                                                {feature.label}
                                            </FeatureLabel>
                                        </Feature>
                                    );
                                })}
                            </FeaturesList>
                        )}

                        {action && (
                            <ActionWrapper>
                                <Button
                                    to={action.path}
                                    variant={action.variant}
                                >
                                    {action.label}
                                </Button>
                            </ActionWrapper>
                        )}
                    </ContentBody>
                </ContentColumn>

                <VisualColumn $imagePosition={imagePosition}>
                    <ImageWrapper>
                        <Image
                            src={image}
                            alt={imageAlt}
                        />

                        {badge && (
                            <Badge>
                                <BadgeMark>
                                    “
                                </BadgeMark>

                                <BadgeQuote>
                                    {badge.text}
                                </BadgeQuote>

                                {badge.logo && (
                                    <BadgeLogo>
                                        {badge.logo}
                                    </BadgeLogo>
                                )}

                                <BadgeLine />
                            </Badge>
                        )}
                    </ImageWrapper>
                </VisualColumn>

            </ContentSplitGrid>
        </ContentSplitSection>
    );
};

export default ContentSplit;