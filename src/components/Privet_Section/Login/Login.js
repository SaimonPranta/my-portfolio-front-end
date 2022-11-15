import React, { useEffect } from 'react';
import './Login.css';
import { Fade, Flip } from 'react-reveal';
import Header from '../../Header/Header';
import loadingGIP from '../../../assets//images/gip/48x48.gif';
import { useState } from 'react';
import cookieExpires from '../../../hooks/cookieExpires';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { adminContext } from '../../../App';



const Login = () => {
    const [input, setInput] = useState({})
    const [isAdmin, setIsAdmin] = useContext(adminContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state ? location.state.from.pathname : "/"

    useEffect(() => {
        if (isAdmin.isAdmin) {
            navigate(from, { replace: true })
        }
    }, [isAdmin]);


    const handleFromData = (e) => {
        e.preventDefault()
        if (input.email && input.password) {
            fetch(`${process.env.REACT_APP_PROJECT_API}/login`, {
                method: "POST",
                body: JSON.stringify(input),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => res.json())
                .then(data => {
                    const currentConditon = {...isAdmin}
                    document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path = /`;
                    if (data.sucess) {
                        currentConditon["isAdmin"] = true
                        setIsAdmin(currentConditon)
                        navigate(from, { replace: true })
                    }
                })
        }
    }
    const handleInputInfo = (e) => {
        const currentInput = { ...input }
        const value = e.target.value
        const name = e.target.name
        currentInput[name] = value
        setInput(currentInput)
    }


    return (
        <section className="login-container">
            <Header />
            <Fade bottom duration={2000} distance="40px">
                <section className='contact-sum-section-main'>

                    <Flip duration={2500}>
                        <div>
                            <span>Admin Login Section</span>
                        </div>
                    </Flip>
                    <div className='contact-sub-section'>
                        <Fade right duration={1000} distance="350px">
                            <div className='messeage-form'>
                                <form onSubmit={handleFromData}>
                                    <Fade right duration={1000} distance="350px" wait={1300}>
                                        <label>Email</label>
                                        <input type="email" name="email" value={input.email ? input.email : ""} required autoComplete="off" onChange={handleInputInfo} className="emailInput" />
                                    </Fade>
                                    <Fade right duration={1400} distance="350px" wait={1500}>
                                        <label>Password</label>
                                        <input type="password" name="password" value={input.password ? input.password : ""} required autoComplete="off" onChange={handleInputInfo} className="subjectInput" />
                                    </Fade>
                                    <Fade right duration={2200} distance="350px" wait={1900}>
                                        <div className='submit-btn-container'>
                                            <div>
                                                <input type="submit" value="Submit" required />
                                                <img src={loadingGIP} alt="loading..." className='loading-img' loading='lazy' />
                                            </div>
                                            <p className='warning'>Note: faild to submite message</p>
                                        </div>
                                    </Fade>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </section>
            </Fade>
        </section>
    );
};

export default Login;