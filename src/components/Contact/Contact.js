import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import ContactSubSection from '../Contact_Sub_Saction/ContactSubSection';
import FooterSection from '../Home/componants/Footer_Section/FooterSection';
import Fade from 'react-reveal/Fade';


const Contact = () => {
    return (
        <section>
            <Header />
            <Fade bottom duration={2000} distance="40px">
                <ContactSubSection />
                <FooterSection />
            </Fade>
        </section>
    );
};

export default Contact;