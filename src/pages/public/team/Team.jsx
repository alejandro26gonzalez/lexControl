import { teamConfig } from "../../../config/pages/team";
import Container from "../../../components/container/Container";
import Hero from "../../../components/hero/Hero";
import GlobalContainer from "../../../styles/GlobalContainer";
import Banner from "../../../components/banner/Banner";
import TeamGrid from "../../../components/teamGrid/TeamGrid";

const Team = () => {
    
    return (
        <GlobalContainer>
            <Hero {...teamConfig.hero}/>
            <Container>
                <TeamGrid 
                config={teamConfig.members}
                />

            </Container>   

            <Banner 
            config={teamConfig.banner}
            />
        </GlobalContainer>
    )
};
export default Team;