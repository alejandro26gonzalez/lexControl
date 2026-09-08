import { homeConfig } from "../../../config/pages/home";
import Container from "../../../components/container/Container";
import Hero from "../../../components/hero/Hero";
import GlobalContainer from "../../../styles/GlobalContainer";
import SpecialtiesPreview from "./components/SpecialtiesPreview ";
import ApproachSection from "./components/ApproachSection";
import ContentSplit from "../../../components/contentSplit/ContentSplit";
import Banner from "../../../components/banner/Banner";

const Home = () => {
    return (
        <GlobalContainer>
            <Hero {...homeConfig.hero}/>
            <Container>
                < SpecialtiesPreview 
                config={homeConfig.specialties}
                />
            </Container>

            <ApproachSection 
            config={homeConfig.enfoque}
            />

            <ContentSplit 
            config={homeConfig.portal}
            />

            <ContentSplit 
            config={homeConfig.teamSection}
            />

            <Banner 
            config={homeConfig.banner}
            />

        </GlobalContainer>
    )
};
export default Home;