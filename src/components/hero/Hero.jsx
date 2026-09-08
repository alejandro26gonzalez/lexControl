import SectionHeader from './SectionHeader';
import Button from "../../components/button/Button";

import {
    HeroContainer,
    HeroOverlay,
    HeroContent,
    HeroActions,
    HeroMain,

    QuoteContent,
    QuoteMark,
    QuoteText,
    QuoteLine,
} from '../../styles/components/hero.styles';

const Hero = ({
    type = 'standard',
    variant = 'dark',
    background,
    eyebrow,
    title,
    description,
    quote,
    actions = [],
}) => {
    return (
        <HeroContainer
            $variant={variant}
            $background={background}
        >
            <HeroOverlay $variant={variant} />

            <HeroContent $hasQuote={Boolean(quote)}>
                <HeroMain>
{/* header */}
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={title}
                        description={description}
                        variant={variant}
                        size='large'
                    />

{/* actions */}
                    {actions.length > 0 && (
                        <HeroActions>
                            {actions.map((action) => (
                                <Button
                                key={action.path}
                                to={action.path}
                                variant={action.variant}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </HeroActions>
                    )}
                </HeroMain>

{/* quote */}

                {type === 'quote' && quote && (
                    <QuoteContent>
                        <QuoteMark>
                            “
                        </QuoteMark>

                        <QuoteText $variant={variant}>
                            {quote}
                        </QuoteText>

                        <QuoteLine />
                    </QuoteContent>
                )}



            </HeroContent>

        </HeroContainer>
    );
};

export default Hero;