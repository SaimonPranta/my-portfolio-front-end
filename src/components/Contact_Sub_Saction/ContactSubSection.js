import React, { useState } from 'react';
import './ContactSubSecton.css';
import { Zoom, Fade, Flip } from 'react-reveal';
import loadingGIP from '../../assets/images/gip/48x48.gif';

const mailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg>
const MessengerIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16"><path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" /></svg>
const WhatsAppIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>


const ContactSubSection = () => {
    const [formInfo, setFormInfo] = useState({})


    // input vlaue validation
    const handleInputInfo = (e) => {
        const currentInfo = { ...formInfo }
        const inputName = e.target.name
        const inputValue = e.target.value
        if (inputName === "email") {
            if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(inputValue)) {
                let lowerCaseEmail = inputValue.toLowerCase()
                currentInfo[inputName] = lowerCaseEmail
                setFormInfo(currentInfo)
            } else {
                currentInfo[inputName] = ''
                setFormInfo(currentInfo)
            }
        }
        if (inputName !== "email") {
            currentInfo[inputName] = inputValue
            setFormInfo(currentInfo)
        }
    }
    const autoRemoveFormNote = () => {
        document.querySelector(".warning").style.display = "none"
        document.querySelector(".sucess-modal").style.display = "none"
    }

    // form data Post function
    const handleFromData = (event) => {
        event.preventDefault()
        if (formInfo.name && formInfo.email && formInfo.subject && formInfo.message) {
            document.querySelector(".loading-img").style.display = "inline-block"
            fetch(`${process.env.REACT_APP_PROJECT_API}/get_message`, {
                method: "POST",
                body: JSON.stringify(formInfo),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    document.querySelector(".loading-img").style.display = "none"
                    if (data.sucess) {
                        document.querySelector(".sucess-modal").style.display = "flex"
                        document.querySelector(".warning").style.display = "none"
                        document.querySelector(".nameInput").value = ""
                        document.querySelector(".emailInput").value = ""
                        document.querySelector(".subjectInput").value = ""
                        document.querySelector(".messageInput").value = ""
                    }
                    if (data.message) {
                        document.querySelector(".sucess-modal").style.display = "none";
                        document.querySelector(".warning").style.display = "block"
                    }
                    setTimeout(() => {
                        autoRemoveFormNote()
                    }, 8000);
                })
        }
    }
    return (
        <section className='contact-sum-section-main'>
            <Zoom duration={2500} distance="650px">
                <h2>Contact</h2>
            </Zoom>
            <Flip duration={2500}>
                <div>
                    <span>Connect with me</span>
                </div>
            </Flip>
            <div className='contact-sub-section'>
                <div className='contact-social'>
                    <Fade left duration={600} distance="400px" wait={100}>
                        <div>
                            {mailIcon}
                            <h6>Email</h6>
                            <p>saimonpranta@gmail.comm</p>
                            <a href='https://mail.google.com/mail/u/0/#search/saimonpranta%40gmail.com?compose=GTvVlcRwPVfJgTLXqCwRFgjpXLJLNzkThLXPlrgwgXsWHqDbznJSnkTdvspHXgTpMgjMdNDhKLXNz' target="_blank">Send a message</a>
                        </div>
                    </Fade>
                    <Fade left duration={900} distance="400px" wait={500}>
                        <div>
                            {MessengerIcon}
                            <h6>Messenger</h6>
                            <p>facebook.com/saimon.pranta</p>
                            <a href='https://www.facebook.com/saimon.pranta' target="_blank">Send a message</a>
                        </div>
                    </Fade>
                    <Fade left duration={1200} distance="400px" wait={900}>
                        <div>
                            {WhatsAppIcon}
                            <h6>WhatsApp</h6>
                            <p>+8801881476432</p>
                            <a href='https://wa.me/+8801881476432' target="_blank">Send a message</a>
                        </div>
                    </Fade>

                </div>
                <Fade right duration={1000} distance="350px">
                    <div className='messeage-form'>
                        <form onSubmit={handleFromData}>
                            <Fade right duration={600} distance="350px" wait={1100}>
                                <label>Your Name</label>
                                <input type="text" name="name" required autoComplete="off" onChange={handleInputInfo} className="nameInput"/>
                            </Fade>
                            <Fade right duration={1000} distance="350px" wait={1300}>
                                <label>Your Email</label>
                                <input type="email" name="email" required autoComplete="off" onChange={handleInputInfo} className="emailInput"/>
                            </Fade>
                            <Fade right duration={1400} distance="350px" wait={1500}>
                                <label>Subject</label>
                                <input type="text" name="subject" required autoComplete="off" onChange={handleInputInfo} className="subjectInput"/>
                            </Fade>
                            <Fade right duration={1800} distance="350px" wait={1700}>
                                <label>Messeage</label>
                                <textarea name="message" rows="4" required autoComplete="off" onChange={handleInputInfo} className="messageInput"/>
                            </Fade>
                            <Fade right duration={2200} distance="350px" wait={1900}>
                                <div className='submit-btn-container'>
                                    <div>
                                        <input type="submit" value="Submit" required />
                                        <img src={loadingGIP} alt="loading..." className='loading-img' loading='lazy'/>
                                    </div>
                                    <p className='warning'>Note: faild to submite message</p>
                                </div>
                            </Fade>
                        </form>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default ContactSubSection;