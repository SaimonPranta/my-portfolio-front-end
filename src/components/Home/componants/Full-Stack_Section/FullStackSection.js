import React from 'react';
import './FullStackSection.css';
import FullStackIcons from '../..//componants/FullStackIcons/FullStackIcons';
import fullStackImage from '../../../../assets/images/3964906.jpg';
import Fade from 'react-reveal/Fade';

const gearIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16"><path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" /></svg>
const FullStackSection = () => {
    return (
        <section className='grid fullStack-section'>
            <div className='fullStack-text'>
                <Fade right duration={2000} distance="650px">
                    <h2>Full Stack Development</h2>
                </Fade>
                <Fade right duration={2500} >
                    <div className='tech-icons'>
                        <FullStackIcons />
                    </div>
                </Fade>
                <Fade right duration={3000} distance="650px">
                    <div className=' fullStack-title'>
                        <p>{gearIcon} Building simple website using HTML, CSS, JavaScript/TypeScript, PHP</p>
                        <p>{gearIcon} Loves to create web application using React.js, Next.js</p>
                        <p>{gearIcon} Creating simple APIs by Node.JS and Express.js with MongoDB as database</p>
                    </div>
                </Fade>
            </div>
            <Fade left duration={2500} distance="650px">
                <div className='common-img fullStack-img'>
                    <img src={fullStackImage} alt="FullStack_Image" />
                </div>
            </Fade>
        </section>
    );
};

export default FullStackSection;