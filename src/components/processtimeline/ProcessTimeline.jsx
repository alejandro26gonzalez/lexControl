import Container from '../container/Container';
import SectionHeader from '../hero/SectionHeader';

import {
    ProcessSection,
    ProcessLayout,
    ProcessIntro,
    ProcessTimelineWrapper,
    Timeline,
    TimelineStep,
    TimelineConnector,
    StepIconWrapper,
    StepContent,
    StepIcon,
    StepNumber,
    StepTitle,
    StepDescription,
} from '../../styles/components/processTimeline.styles';

const ProcessTimeline = ({ config }) => {
    return (
        <ProcessSection>
            <Container>
                <ProcessLayout>  

                    <ProcessIntro>
                        <SectionHeader
                            eyebrow={config.eyebrow}
                            title={config.title}
                            description={config.description}
                            size="medium"
                        />
                    </ProcessIntro>

                    <ProcessTimelineWrapper>
                        <Timeline>
                            {config.steps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <TimelineStep key={step.id}>

                                        <StepIconWrapper>
                                            <StepIcon>
                                                <Icon />
                                            </StepIcon>
                                        </StepIconWrapper>

                                        <StepContent>

                                            <StepNumber>
                                                {step.number}
                                            </StepNumber>

                                            <StepTitle>
                                                {step.title}
                                            </StepTitle>

                                            <StepDescription>
                                                {step.description}
                                            </StepDescription>

                                        </StepContent>

                                        {index < config.steps.length - 1 && (
                                            <TimelineConnector />
                                        )}

                                    </TimelineStep>
                                );
                            })}
                        </Timeline>
                    </ProcessTimelineWrapper>

                </ProcessLayout>
            </Container>
        </ProcessSection>
    );
};

export default ProcessTimeline;