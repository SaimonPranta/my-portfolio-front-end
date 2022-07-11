import React from 'react';
import './TestimonialSection.css';
import testimonialImg1 from '../../../../assets/images/testiomonial_image/testimonial1.jfif';
import testimonialImg2 from '../../../../assets/images/testiomonial_image/testimonial2.jfif';
import testimonialImg3 from '../../../../assets/images/testiomonial_image/testimonial3.jfif';
import { Zoom, Flip, Bounce } from 'react-reveal';


const TestimonialSection = () => {

    return (
        <section className='testimonial-section'>
            <div className='testimonial-heading'>
                <Zoom duration={2500} distance="650px">
                    <h2>Testimonial</h2>
                </Zoom>
                <Flip duration={2500}>
                    <div>
                        <span>What Clients Say</span>
                    </div>
                </Flip>
            </div>
            <div className='testiomonial-container'>
                <Bounce duration={1800}>
                    <div>
                        <img src={testimonialImg1} alt="_Image" loading="lazy" />
                        <h4>Mr. saimon</h4>
                        <p>
                            Very experienced and super fast. Weren’t able to get one thing done but not his fault. I will definitely use him again. Very nice guy!
                        </p>
                    </div>
                </Bounce>
                <Bounce duration={2100}>
                    <div>
                        <img src={testimonialImg3} alt="_Image" loading="lazy" />
                        <h4>Mr. saimon</h4>
                        <p>
                            Great experience, highly recommend. Worked through all my questions with me and was very timely in his responsiveness.
                        </p>
                    </div>
                </Bounce>

                <Bounce duration={2500}>
                    <div>
                        <img src={testimonialImg2} alt="_Image" loading="lazy" />
                        <h4>Mr. saimon</h4>
                        <p>
                            He was excellent to work with, and he did a great job fixing osme issues that we had.
                        </p>
                    </div>
                </Bounce>
            </div>
        </section>
    );
};

export default TestimonialSection;
