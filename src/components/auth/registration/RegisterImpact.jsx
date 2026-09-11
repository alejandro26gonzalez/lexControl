import { FiBarChart2, FiFileText, FiShield, FiUsers } from 'react-icons/fi';

import IMAGES from '../../../assets/images/images';

import {
    ImpactContainer,
    ImpactOverlay,
    ImpactContent,
    Logo,
    MainMessage,
    Description,
    BenefitsList,
    BenefitItem,
    BenefitIcon,
    BenefitContent,
    BenefitTitle,
    BenefitDescription,
    Quote,
    QuoteLine,
    QuoteText,
} from '../../../styles/auth/registration/registerImpact.styles';

const benefits = [
    {
        id: 'cases',
        icon: FiFileText,
        title: 'Centraliza tus casos',
        description: 'Toda tu información en un solo lugar.',
    },
    {
        id: 'security',
        icon: FiShield,
        title: 'Trabaja con seguridad',
        description: 'Protección de datos y acceso confiable.',
    },
    {
        id: 'collaboration',
        icon: FiUsers,
        title: 'Colabora sin límites',
        description: 'Conecta tu equipo y tus clientes.',
    },
    {
        id: 'decisions',
        icon: FiBarChart2,
        title: 'Toma mejores decisiones',
        description: 'Con información en tiempo real.',
    },
];

const RegisterImpact = () => {
    return (
        <ImpactContainer>
            <ImpactOverlay />

            <ImpactContent>
                <Logo
                    src={IMAGES.logoBlack}
                    alt="LexControl"
                />

                <MainMessage>
                    Juntos por un ejercicio legal más eficiente.
                </MainMessage>

                <Description>
                    Únete a LexControl y lleva la gestión de tus
                    procesos al siguiente nivel.
                </Description>

                <BenefitsList>
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <BenefitItem key={benefit.id}>
                                <BenefitIcon>
                                    <Icon />
                                </BenefitIcon>

                                <BenefitContent>
                                    <BenefitTitle>
                                        {benefit.title}
                                    </BenefitTitle>

                                    <BenefitDescription>
                                        {benefit.description}
                                    </BenefitDescription>
                                </BenefitContent>
                            </BenefitItem>
                        );
                    })}
                </BenefitsList>

                <Quote>
                    <QuoteLine />

                    <QuoteText>
                        “Tecnología que impulsa la justicia.”
                    </QuoteText>
                </Quote>
            </ImpactContent>
        </ImpactContainer>
    );
};

export default RegisterImpact;