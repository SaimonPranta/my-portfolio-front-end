import React, { useEffect, useRef } from 'react';
import './ScrollToTopButton.css';
import scroolBtn from '../../assets/images/icons/scroll.png';


const ScrollToTopButton = () => {
    const scrollTopRef = useRef()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const scrollBtnHandler = () => {
        if (scrollTopRef.current) {
            if (window.scrollY > 600) {
                scrollTopRef.current.style.display = "flex";
            } else{
                scrollTopRef.current.style.display = "none";
            }
        }

    }
    useEffect(()=> {
        window.addEventListener('scroll', scrollBtnHandler)
    }, []);
    

    return (
        <div className='scroll-btn-container' onClick={scrollToTop} ref={scrollTopRef}>
            <img src={scroolBtn} alt="_image" />
        </div>
    );
};

export default ScrollToTopButton;