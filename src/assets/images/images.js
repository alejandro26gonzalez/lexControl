import logo_white from "../logos/logo-blanco.png";
import logo_black from "../logos/logo-negro.png";
import home_hero_img from "./home/hero.png";
import home_focus_img from "./home/focus-img.png";
import home_portal_img from "./home/client-portal.img.png";
import home_team_img from "./home/team-img.png";
import about_home from "./about/hero.png";
import about_office from "./about/office.png";
import about_books from "./about/books.png";
import about_quote from "./about/quote-logo.png";
import specialties_hero from "./specialties/hero.png";
import specialties_corporate from "./specialties/corporate.png";
import specialties_civile from "./specialties/civile.jpg";
import specialties_job from "./specialties/job.jpg";
import specialties_state from "./specialties/state.jpg";
import specialties_crime from "./specialties/legal.jpg";
import specialties_family from "./specialties/family.jpg";
import contact_hero from "./contacto/hero.png";
import contact_office from "./contacto/office.png";
import team_hero from "./team/hero.png";
import team_1 from "./team/fernando.png";
import team_2 from "./team/juana.png";
import team_3 from "./team/hernan.png";
import team_4 from "./team/maria.png";
import resour_hero from "./resources/hero.png";

const IMAGES = {
    logoWhite: logo_white,
    logoBlack: logo_black,
    home: {
        hero: home_hero_img,
        focus: home_focus_img,
        portal: home_portal_img,
        team: home_team_img
    },
    about: {
        hero: about_home,
        office: about_office,
        books: about_books,
        quoteText: about_quote
    },
    specialties: {
        hero: specialties_hero,
        corporate: specialties_corporate,
        civile: specialties_civile,
        job: specialties_job,
        state: specialties_state,
        legal: specialties_crime,
        family: specialties_family
    },
    contact:{
        hero: contact_hero,
        office: contact_office
    },
    team: {
        hero: team_hero,
        person1: team_1,
        person2: team_2,
        person3: team_3,
        person4: team_4
    },
    resources: {
        hero: resour_hero
    }
};

export default IMAGES;