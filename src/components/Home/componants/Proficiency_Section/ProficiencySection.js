import React from 'react';
import './ProficiencySection.css';
import proficiencyImage from '../../../../assets/images/undraw_data_re_80ws.svg';
import SkillsSubSection from '../Skills_Sub_Section/SkillsSubSection';
import { Zoom, Fade } from 'react-reveal';



const ProficiencySection = () => {
    return (
        <section className='proficiency-main-section'>
            <Zoom duration={2500} distance="650px">
                <div >
                    <h2>Proficiency</h2>
                </div>
            </Zoom>
            <div className='grid proficiency-section'>
                <div className='proficiency-bar'>
                    <SkillsSubSection />
                </div>
                <div className='common-img proficiency-img'>
                    <Fade left duration={2500} distance="650px">
                        <img src={proficiencyImage} alt="_Image" loading="lazy" />
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ProficiencySection;