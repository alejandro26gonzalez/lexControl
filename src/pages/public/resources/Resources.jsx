import { resourcesConfig } from "../../../config/pages/resources";
import GlobalContainer from "../../../styles/GlobalContainer";
import Banner from "../../../components/banner/Banner";
import Hero from "../../../components/hero/Hero";

const Resources = () => {
    return (
        <GlobalContainer>
            <Hero 
            {...resourcesConfig.hero}
            /> 


            <Banner 
            config={resourcesConfig.banner}
            />  
        </GlobalContainer>
    )
};
export default Resources;