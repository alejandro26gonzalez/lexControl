import Button from "../button/Button";
import SectionHeader from "../hero/SectionHeader";

import {
    BannerSection,
    BannerContent,
    BannerMain,
    BannerIcon,
    BannerAction,
    BannerQuote,
    BannerLogo,
    BannerQuoteMark,
    BannerQuoteLine,
} from '../../styles/components/banner.styles';

const Banner = ({ config }) => {
    const {
        variant = 'dark',
        icon,
        eyebrow,
        title,
        description,
        quote,
        logo,
        logoAlt,
        action,
    } = config;

    const Icon = icon;

    return (
        <BannerSection $variant={variant}>
            <BannerContent $hasQuote={Boolean(quote)}>

                {quote ? (
                    <>
                        <BannerMain>
                            <BannerQuoteMark>“</BannerQuoteMark>

                            <BannerQuote>
                                {quote}
                            </BannerQuote>

                            <BannerQuoteLine />
                        </BannerMain>

                        {logo && (
                            <BannerLogo
                                src={logo}
                                alt={logoAlt || 'LexControl'}
                            />
                        )}
                    </>
                ) : (
                    <>
                        {Icon && (
                            <BannerIcon>
                                <Icon />
                            </BannerIcon>
                        )}

                        <BannerMain>
                            <SectionHeader
                                eyebrow={eyebrow}
                                title={title}
                                description={description}
                                variant={variant}
                                size="medium"
                            />
                        </BannerMain>

                        {action && (
                            <BannerAction>
                                <Button
                                    to={action.path}
                                    variant={action.variant}
                                >
                                    {action.label}
                                </Button>
                            </BannerAction>
                        )}
                    </>
                )}

            </BannerContent>
        </BannerSection>
    );
};

export default Banner;