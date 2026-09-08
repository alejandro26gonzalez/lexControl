import { footerConfig } from "../../config/components/footer";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import {
    FooterContainer,
    FooterContent,
    FooterTop,
    LogoLink,
    Logo,
    Navigation,
    NavigationLink,
    SocialLinks,
    SocialLink,
    FooterMessage,
    Divider,
    FooterBottom,
    Copyright,
    LegalNavigation,
    LegalLink,
} from '../../styles/components/footer.styles';

const Footer = ({ variant }) => {
    return (
        
        <FooterContainer>

            <FooterContent>

                <FooterTop>

                    <LogoLink to="/">
                        <Logo
                            src={
                                variant === 'dark' 
                                ? footerConfig.logos.dark
                                : footerConfig.logos.light
                            }
                            alt={`${footerConfig.company} - Inicio`}
                        />
                    </LogoLink>

                    <Navigation>
                        {footerConfig.links.map((link) => (
                            <NavigationLink
                                key={link.id}
                                to={link.path}
                            >
                                {link.label}
                            </NavigationLink>
                        ))}
                    </Navigation>

                    <SocialLinks>

                        <SocialLink
                            href={footerConfig.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </SocialLink>

                        <SocialLink
                            href={footerConfig.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialLink>

                        <SocialLink
                            href={`mailto:${footerConfig.social.email}`}
                            aria-label="Correo electrónico"
                        >
                            <FiMail />
                        </SocialLink>

                    </SocialLinks>

                    <FooterMessage>
                        {footerConfig.message}
                    </FooterMessage>

                </FooterTop>

                <Divider />

                <FooterBottom>

                    <Copyright>
                        {footerConfig.copyright}
                    </Copyright>

                    <LegalNavigation>
                        {footerConfig.legalLinks.map((link) => (
                            <LegalLink
                                key={link.id}
                                to={link.path}
                            >
                                {link.label}
                            </LegalLink>
                        ))}
                    </LegalNavigation>

                </FooterBottom>

            </FooterContent>

        </FooterContainer>
        
    );
};

export default Footer;
