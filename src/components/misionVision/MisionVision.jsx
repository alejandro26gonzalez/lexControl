import {
    MissionVisionSection,
    MissionVisionGrid,
    MissionVisionItem,
    MissionVisionIcon,
    MissionVisionContent,
    MissionVisionEyebrow,
    MissionVisionParagraph,
} from '../../styles/components/misionVision.styles';

const MissionVision = ({ config }) => {
    const { variant = 'light', mission, vision } = config;

    const items = [mission, vision];

    return (
        <MissionVisionSection $variant={variant}>
            <MissionVisionGrid>
                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <MissionVisionItem key={item.eyebrow} $index={index} $variant={variant}>
                            <MissionVisionIcon $variant={variant}>
                                <Icon />
                            </MissionVisionIcon>

                            <MissionVisionContent>
                                <MissionVisionEyebrow $variant={variant}>
                                    {item.eyebrow}
                                </MissionVisionEyebrow>

                                {item.paragraphs.map((paragraph, paragraphIndex) => (
                                    <MissionVisionParagraph
                                        key={paragraphIndex}
                                        $variant={variant}
                                    >
                                        {paragraph}
                                    </MissionVisionParagraph>
                                ))}
                            </MissionVisionContent>
                        </MissionVisionItem>
                    );
                })}
            </MissionVisionGrid>

        </MissionVisionSection>
    );
};

export default MissionVision;