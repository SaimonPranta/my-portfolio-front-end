import React from 'react';
import './MiniFooter.css';
import Jump from 'react-reveal/Jump';

const MiniFooter = () => {
    return (
        <section>
            <Jump>
                <div className='mini-footer'>
                    <h6> <span>Made by</span> Saimon Pranta</h6>
                </div>
            </Jump>
        </section>
    );
};

export default MiniFooter;