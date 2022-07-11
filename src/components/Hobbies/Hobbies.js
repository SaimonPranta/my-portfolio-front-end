import React from 'react';
import './Hobbies.css';
import Header from '../Header/Header';
import MiniFooter from '../Mini_Footer/MiniFooter';
import lear_techonology from '../../assets/images/hobbies_images/learning_technology.svg';
import reading from '../../assets/images/hobbies_images/Reading.png';
import writing from '../../assets/images/hobbies_images/Writing.png';
import lestining_music from '../../assets/images/hobbies_images/Music.png';
import Fade from 'react-reveal/Fade';


const Hobbies = () => {
    return (
        <section className='hobbies-section'>
            <Header />
            <Fade bottom duration={2000} distance="40px">
                <div className='hobbies-taitel-section'>
                    <h2>Hobbies</h2>
                    <p>I spend my leisure with my hobbies</p>
                </div>
                <div className='grid learning'>
                    <Fade left duration={2000} distance="400px">
                        <div>
                            <img src={lear_techonology} alt='_image' loading="lazy" />
                        </div>
                    </Fade>
                    <Fade right duration={2000} distance="400px">
                        <div>
                            <h3 className='hobbies-h3'>Learning</h3>
                            <p>When i get free times I love to learn new Technologies!</p>
                        </div>
                    </Fade>
                </div>
                <div className='grid reading'>
                    <Fade left duration={2000} distance="400px">
                        <div>
                            <h3>Reading Books</h3>
                            <p>I love to read sci-fi and detective books!</p>
                        </div>
                    </Fade>
                    <Fade right duration={2000} distance="400px">
                        <div>
                            <img src={reading} alt='_image' loading="lazy" />
                        </div>
                    </Fade>
                </div>
                <div className='grid'>
                    <Fade left duration={2000} distance="400px">
                        <div>
                            <img src={writing} alt='_image' loading="lazy" />
                        </div>
                    </Fade>
                    <Fade right duration={2000} distance="400px">
                        <div>
                            <h3>Writing</h3>
                            <p>I write poems and stories when I get free times!</p>
                        </div>
                    </Fade>
                </div>
                <div className='grid listening-music'>
                    <Fade left duration={2000} distance="400px">
                        <div>
                            <h3>Listening Music</h3>
                            <p>I am a fan of Alan Walker and Linkin Park!</p>
                        </div>
                    </Fade>
                    <Fade right duration={2000} distance="400px">
                        <div>
                            <img src={lestining_music} alt='_image' loading="lazy" />
                        </div>
                    </Fade>
                </div>
                <MiniFooter />
            </Fade>
        </section>
    );
};

export default Hobbies;