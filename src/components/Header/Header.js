import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { createThemContext } from '../../App';
import './Header.css'
import Fade from 'react-reveal/Fade';

const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" className="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" /><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" /></svg>
const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#EAB509" className="bi bi-brightness-high-fill" viewBox="0 0 16 16"><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" /></svg>

const Header = () => {
    const [themInfo, setThemInfo] = useContext(createThemContext)
    const menuToggolerRef = useRef()
    const navItemsrRef = useRef()


    useEffect(() => {
        const currentState = { ...themInfo }
        const themMood = localStorage.getItem("my_web_them")

        if (themMood === "dark") {
            currentState.background = "#1D1B34"
            setThemInfo(currentState)
        } else {
            currentState.background = "#EDF9FE"
            setThemInfo(currentState)
            localStorage.removeItem("my_web_them")
        }
    }, []);

    const handleThem = () => {
        const currentState = { ...themInfo }
        if (currentState.background === "#EDF9FE") {
            currentState.background = "#1D1B34"
            setThemInfo(currentState)
            localStorage.setItem("my_web_them", "dark")
        } else {
            currentState.background = "#EDF9FE"
            setThemInfo(currentState)
            localStorage.removeItem("my_web_them")
        }
    }
    const menuIcon = () => {
        menuToggolerRef.current.classList.toggle("change");
        navItemsrRef.current.classList.toggle("nav-items-toggoler")
    }


    return (
        <Fade top duration={1000} distance="30px">
            <header className='nav-container'>
                <nav>
                    <div className='logo'>
                        <NavLink to='/'>
                            <span>{"<"}</span>
                            <span className='logo-name'>{"Saimon Pranta"}</span>
                            <span>{"/>"}</span>
                        </NavLink>
                    </div>

                    <div className='toggoler-icon-contaienr'>
                        <div className="toggole-icon" ref={menuToggolerRef} onClick={menuIcon} >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>


                    <div className='nav-items ' ref={navItemsrRef}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about_me'>About Me</NavLink>
                        <NavLink to='/Projects'>Projects</NavLink>
                        {/* <NavLink to='/opren_source'>Opren Source</NavLink> */}
                        <NavLink to='/hobbies'>Hobbies</NavLink>
                        <NavLink to='/Contact'>Contact</NavLink>

                        <a className='light-dark-handler' href>
                            <div onClick={handleThem}>
                                {
                                    themInfo.background === "#EDF9FE" ? moonIcon : sunIcon
                                }
                            </div>
                        </a>

                    </div>
                </nav>
            </header>
        </Fade>

    );
};

export default Header;