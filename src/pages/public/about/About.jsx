import { aboutConfig } from "../../../config/pages/about";
import Container from "../../../components/container/Container";
import Hero from "../../../components/hero/Hero";
import GlobalContainer from "../../../styles/GlobalContainer";
import Banner from "../../../components/banner/Banner";
import ContentSplit from "../../../components/contentSplit/ContentSplit";
import MissionVision from "../../../components/misionVision/MisionVision";
import Pillars from "../../../components/pillars/Pillars";

const About = () => {
    return (
        <GlobalContainer>
            <Hero {...aboutConfig.hero}/>

            <ContentSplit 
            config={aboutConfig.genesis}
            />

            <Container>

                <MissionVision 
                config={aboutConfig.misionVision}
                />
            
            </Container>   

            <Pillars 
            config={aboutConfig.pillars}
            />

            <ContentSplit 
            config={aboutConfig.diferencial}
            />

            <Banner 
            config={aboutConfig.quoteBanner}
            />

            <Banner 
            config={aboutConfig.contactBanner}
            />
        </GlobalContainer>
    )
};
export default About;