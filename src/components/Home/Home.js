import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import HeroSection from './componants/Hero_Section/HeroSection';
import FullStackSection from './componants/Full-Stack_Section/FullStackSection';
import ReverseEngSection from './componants/Reverse_Eng_Section/ReverseEngSection';
import ProficiencySection from './componants/Proficiency_Section/ProficiencySection';
import TestimonialSection from './componants/Testimonial_Section/TestimonialSection';
import FooterSection from './componants/Footer_Section/FooterSection';
import ContactSubSection from '../Contact_Sub_Saction/ContactSubSection';
import ScrollToTopButton from '../Scroll_To_Top_Button/ScrollToTopButton';

const Home = () => {

    return (
        <>
            <Header/>
            <HeroSection/>
            <FullStackSection/>
            <ReverseEngSection/>
            <ProficiencySection/>
            <TestimonialSection/>
            <ContactSubSection/>
            <FooterSection/>
            <ScrollToTopButton/>
        </>
    );
};

export default Home;