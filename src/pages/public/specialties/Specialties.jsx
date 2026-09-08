import { specialtiesConfig } from "../../../config/pages/specialties";
import Container from "../../../components/container/Container";
import Hero from "../../../components/hero/Hero";
import GlobalContainer from "../../../styles/GlobalContainer";
import Banner from "../../../components/banner/Banner";
import ProcessTimeline from "../../../components/processtimeline/ProcessTimeline";
import SpecialtiesGrid from "../../../components/specialtiesGrid/SpecialtiesGrid";

const Specialties = () => {
    return (
        <GlobalContainer>
            <Hero {...specialtiesConfig.hero}/>
            <Container>

                <ProcessTimeline 
                config={specialtiesConfig.timeline}
                />

                <SpecialtiesGrid 
                config={specialtiesConfig.grid}
                />
                
            </Container>   

            <Banner 
            config={specialtiesConfig.banner}
            />
        </GlobalContainer>
    )
};
export default Specialties;