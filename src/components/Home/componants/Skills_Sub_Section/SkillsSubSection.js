import React from 'react';
import './SkillsSubSection.css';
import Fade from 'react-reveal/Fade';

const SkillsSubSection = () => {
    return (
        <div>
            <div className='skills-bar-contaienr '>
                <Fade right duration={1800} distance="650px">

                    <div>
                        <h4>HTML</h4>
                        <div className="skill-bar skill-item-1">
                            <span>99%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={2200} distance="650px">

                    <div>
                        <h4>CSS/SCSS</h4>
                        <div className="skill-bar skill-item-2">
                            <span>90%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={2600} distance="650px">

                    <div>
                        <h4>Javascript/TypeScript</h4>
                        <div className="skill-bar skill-item-3">
                            <span>85%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={3000} distance="650px">

                    <div>
                        <h4>PHP</h4>
                        <div className="skill-bar skill-item-4">
                            <span>70%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={3400} distance="650px">

                    <div>
                        <h4>React.js</h4>
                        <div className="skill-bar skill-item-5">
                            <span>75%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={3800} distance="650px">

                    <div>
                        <h4>Next.js</h4>
                        <div className="skill-bar skill-item-6">
                            <span>80%</span>
                        </div>
                    </div>

                </Fade>
                <Fade right duration={4200} distance="650px">

                    <div>
                        <h4>Node.js/Express.js</h4>
                        <div className="skill-bar skill-item-7">
                            <span>70%</span>
                        </div>
                    </div>

                </Fade>
            </div>
        </div>
    );
};

export default SkillsSubSection;