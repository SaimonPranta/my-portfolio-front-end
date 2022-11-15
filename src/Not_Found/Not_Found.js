import React from 'react';
import { NavLink } from 'react-router-dom';
import './Not_Found.css';

const Not_Found = () => {
    return (
        <section className='not-found-secton'>
            <div className='not-found-sub-secton'>
                <aside><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />
                </aside>
                <div className='main'>
                    <h1>404</h1>
                    <h2> PAGE NOT FOUND!</h2>
                    <p>
                        Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                    </p>
                    <NavLink to='/'>Back to Home</NavLink>
                </div>
            </div>
        </section>
    );
};

export default Not_Found;