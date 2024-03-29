import React from 'react';
import introImage from '../../../../assets/images/my-image/pranto-vai-8.png';
import introImage2 from '../../../../assets/images/my-image/IMG_20220929_123053-1.png';
import DownloadCV from '../../../Download_CV/DownloadCV';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const HeroSection = () => {
    return (
        <Fade bottom duration={2000} distance="40px">
            <section className='grid home-intro'>
                <div className='hero-text'>
                    <p className='first-p'>
                        Hi, I'm
                    </p>
                    <h1>Saimon Pranta</h1>
                    {/* <span>( The Perfectionist )</span> <br/> */}
                    <h2>( Full-Stack Web & Android App Developer )</h2>
                    <p>A student playing with codes. Trying to learn full stack development and android app development. Loves to contribute in open source projects.</p>
                    <Jump duration={2500} distance="40px">
                        <DownloadCV />
                    </Jump>
                </div>
                <div className='common-img'>
                    <img src={introImage} alt="_Image" />
                    {/* <img src={introImage2} alt="_Image" /> */}

                </div>
            </section>
        </Fade>

    );
};

export default HeroSection;