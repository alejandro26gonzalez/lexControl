import Container from '../container/Container';
import Button from '../button/Button';
import { FiMapPin } from 'react-icons/fi';

import {
    LocationSection,
    LocationContainer,
    MapWrapper,
    MapFrame,
    MapOverlay,
    MapLink,
    LocationInfo,
    LocationEyebrow,
    LocationAccent,
    LocationTitle,
    LocationDescription,
    LocationAction,
    LocationImage,
    Features,
    Feature,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
} from '../../styles/components/contactLocation.styles';

const ContactLocation = ({ config }) => {

    const mapUrl = `https://www.google.com/maps?q=${config.mapDetails.latitude},${config.mapDetails.longitude}&output=embed`;

    return (
        <LocationSection>
            <Container>
                <LocationContainer>
                    <MapWrapper>
                        <MapFrame
                            src={mapUrl}
                            title={`Ubicación de LexControl - ${config.mapDetails.address}`}
                            loading="lazy"
                            allowFullScreen
                        />

                        <MapOverlay>
                            <FiMapPin />

                            <span>
                                LexControl Abogados
                            </span>
                        </MapOverlay>

                        <MapLink
                            href={config.mapDetails.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver en Google Maps ↗
                        </MapLink>
                    </MapWrapper>

                    <LocationInfo>
                        <LocationEyebrow>
                            {config.eyebrow}
                        </LocationEyebrow>

                        <LocationAccent />

                        <LocationTitle>
                            {config.title}
                        </LocationTitle>

                        <LocationDescription>
                            {config.description}
                        </LocationDescription>

                        <LocationAction>
                            <Button
                                to={config.action.path}
                                variant={config.action.variant}
                            >
                                {config.action.label}
                            </Button>
                        </LocationAction>
                    </LocationInfo>

                    <LocationImage $image>
                        <img
                            src={config.image}
                            alt="Oficina de LexControl Abogados"
                        />
                    </LocationImage>
                </LocationContainer>

                <Features>
                    {config.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <Feature key={feature.id}>
                                <FeatureIcon>
                                    <Icon />
                                </FeatureIcon>

                                <FeatureTitle>
                                    {feature.title}
                                </FeatureTitle>

                                <FeatureDescription>
                                    {feature.description}
                                </FeatureDescription>
                            </Feature>
                        );
                    })}
                </Features>
                
            </Container>
        </LocationSection>
    );
};

export default ContactLocation;