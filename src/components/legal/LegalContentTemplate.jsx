import {
    Content,
    ContentHeader,
    ContentEyebrow,
    ContentTitle,
    ContentIntro,
    UpdatedAt,
    Sections,
    LegalSection,
    SectionHeader,
    SectionNumber,
    SectionHeading,
    SectionBody,
    Paragraph,
    HighlightList,
    Highlight,
    HighlightIcon,
    HighlightContent,
    HighlightTitle,
    HighlightText,
    BulletList,
    Bullet
} from "../../styles/components/legalContentTemplate.styles";

const LegalContentTemplate = ({ section }) => {
    return (
        <Content>

            <ContentHeader>

                <ContentEyebrow>
                    INFORMACIÓN LEGAL
                </ContentEyebrow>

                <ContentTitle>
                    {section.title}
                </ContentTitle>

                <ContentIntro>
                    {section.intro}
                </ContentIntro>

                <UpdatedAt>
                    Última actualización: {section.updatedAt}
                </UpdatedAt>

            </ContentHeader>

            <Sections>

                {section.content.map((item) => (
                    <LegalSection key={item.number}>

                        <SectionHeader>

                            <SectionNumber>
                                {item.number}
                            </SectionNumber>

                            <div>
                                <ContentEyebrow>
                                    {item.eyebrow}
                                </ContentEyebrow>

                                <SectionHeading>
                                    {item.title}
                                </SectionHeading>
                            </div>

                        </SectionHeader>

                        <SectionBody>

                            {item.paragraphs?.map((paragraph, index) => (
                                <Paragraph key={index}>
                                    {paragraph}
                                </Paragraph>
                            ))}

                            {item.highlights && (
                                <HighlightList>

                                    {item.highlights.map((highlight, index) => {
                                        const Icon = highlight.icon;

                                        return (
                                            <Highlight key={index}>

                                                <HighlightIcon>
                                                    <Icon />
                                                </HighlightIcon>

                                                <HighlightContent>

                                                    <HighlightTitle>
                                                        {highlight.title}
                                                    </HighlightTitle>

                                                    <HighlightText>
                                                        {highlight.text}
                                                    </HighlightText>

                                                </HighlightContent>

                                            </Highlight>
                                        );
                                    })}

                                </HighlightList>
                            )}

                            {item.list && (
                                <BulletList>
                                    {item.list.map((text, index) => (
                                        <Bullet key={index}>
                                            {text}
                                        </Bullet>
                                    ))}
                                </BulletList>
                            )}

                        </SectionBody>

                    </LegalSection>
                ))}

            </Sections>

        </Content>
    );
};

export default LegalContentTemplate;