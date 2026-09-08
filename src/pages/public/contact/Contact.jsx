import { contactConfig } from "../../../config/pages/contact";
import Hero from "../../../components/hero/Hero";
import GlobalContainer from "../../../styles/GlobalContainer";
import Banner from "../../../components/banner/Banner";
import ContactLocation from "../../../components/contactLocation/ContactLocation";
import ContactForm from "../../../components/contactForm/ContactForm";

const Contact = () => {
    return (
        <GlobalContainer>
            <Hero {...contactConfig.hero}/>
            
            <ContactForm 
            config={contactConfig}
            />

            <ContactLocation 
            config={contactConfig.location}
            />

            <Banner 
            config={contactConfig.banner}
            />  

        </GlobalContainer>
    )
};
export default Contact;