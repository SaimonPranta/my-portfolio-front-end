import React, { useEffect, useState } from 'react';
import './Projects.css';
import Header from '../Header/Header';
import prujecrImage from '../../assets/images/porject.svg';
import MiniFooter from '../Mini_Footer/MiniFooter';
import { Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import Sub_Loader from '../Sub_Loader/Sub_Loader';


const Projects = () => {
    const [porjectInfo, setProjectInfo] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROJECT_API}/api/porjects`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const newArray = [];
                for (let i = data.length - 1; i >= 0; i--) {
                    const element = data[i];
                    newArray.push(element);
                    setProjectInfo(newArray);
                }
            })
    }, []);

    return (
        <section className='porject-container'>
            <Header />

            <Fade bottom duration={2000} distance="40px">
                <div className='porject-section'>
                    <div className='porject-contaienr-main-img'>
                        <img src={prujecrImage} alt="_image" />
                    </div>
                    <div className='project-main-text'>
                        <h2>Projects</h2>
                        <p>My projects are mostly open source. I like to contribute in other's project. I always try my best to enhance every project to the peak!</p>
                    </div>
                </div>
                <div className='project-sub-taitel'>
                    <h4>My Recent Work</h4>
                </div>
                <div className='projects-contaienr'>
                    {
                        porjectInfo.length ? porjectInfo.map((proInfo) => {
                            return <div key={proInfo._id}>
                                <Zoom>
                                    <div className='sub-poroject-container'>
                                        <div>
                                            <img src={`${process.env.REACT_APP_PROJECT_API}/${proInfo.img}`} alt="_image" />
                                        </div>
                                        <div className='projects-text-contaienr'>
                                            <h6>{proInfo.title}</h6>
                                            <div>
                                                <a href={proInfo.gitHub ? proInfo.gitHub.toString() : ""} target="framename">Github</a>
                                                <a href={proInfo.liveLink ? proInfo.liveLink.toString() : ""} target="framename">live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        }) : null
                    }
                </div>

                <div>
                    {
                        !porjectInfo.length && <Sub_Loader />
                    }
                </div>

                <MiniFooter />
            </Fade>
        </section>
    );
};

export default Projects;