import React from 'react';
import './AboutMe.css';
import Header from '../Header/Header';
import FooterSection from '../Home/componants/Footer_Section/FooterSection';
import myImage from '../../assets/images/my-image/pranto-vai-3.png';
import SkillsSubSection from '../Home/componants/Skills_Sub_Section/SkillsSubSection';
import DownloadCV from '../Download_CV/DownloadCV';
import ContactSubSection from '../Contact_Sub_Saction/ContactSubSection';
import { Zoom, Fade } from 'react-reveal';
import Jump from 'react-reveal/Jump';


const AboutMe = () => {
    return (
        <section className='about-secton'>
            <Header />
            <Fade bottom duration={2000} distance="40px">
                <div className='grid about-me-info-container'>
                </div>
                <div className='about-img'>
                    <img src={myImage} alt="_image" />
                    <h1>Saimon Pranta</h1>
                    <h4>Full-Stack Developer</h4>
                </div>
                <div >
                    <Zoom duration={2500} distance="350px">
                        <h2>About Me</h2>
                    </Zoom>
                    <p>
                        I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. Over the past years, I created 50s of websites for my clients. I pride myself on doing quality work and maintain excellent communication. Most of the time I work with  JavaScript, ReactJS, NextJS, NodeJS/ExpressJS but some technologies I enjoy working with PHP.
                    </p>
                </div>
                <div className='grid about-me-info-container'>
                    <div className=''>
                        {/* <h3>Education</h3> */}
                        <div className='about-me-info'>
                            <Fade left duration={500} distance="650px">
                                <span> Birthday: 7 May 1999</span>
                            </Fade>
                            <Fade left duration={1000} distance="650px">
                                <span> Email: saimonpranta@gmail.com</span>
                            </Fade>
                            <Fade left duration={1500} distance="650px">
                                <span> Phone: +880 01881476432</span>
                            </Fade>
                            <Fade left duration={2000} distance="650px">
                                <span> Website: saimonpranta.com</span>
                            </Fade>
                            <Fade left duration={2500} distance="650px">
                                <span> City: Chittagong</span>
                            </Fade>
                        </div>
                        <Jump duration={2500} distance="40px">
                            <DownloadCV />
                        </Jump>
                    </div>
                    <div className='skills-contaienr'>
                        <SkillsSubSection />
                    </div>
                </div>
                <ContactSubSection />
                <FooterSection />
            </Fade>

        </section>
    );
};

export default AboutMe;