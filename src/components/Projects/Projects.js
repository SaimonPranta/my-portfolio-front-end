import React, { useEffect, useState } from 'react';
import './Projects.css';
import Header from '../Header/Header';
import prujecrImage from '../../assets/images/porject.svg';
import MiniFooter from '../Mini_Footer/MiniFooter';
import { Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';


const Projects = () => {
    const [porjectInfo, setProjectInfo] = useState({})

    useEffect(() => {
        fetch(process.env.REACT_APP_PROJECT_API)
            .then(res => res.json())
            .then(data => {
                const newArray = [];
                for (let i = data.length - 1; i >= 0; i--) {
                    const element = data[i];
                    newArray.push(element);
                    setProjectInfo(newArray);
                }
            })
    }, []);

    return (
        <section>
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
                        porjectInfo.length && porjectInfo.map((proInfo) => {
                            return <div key={proInfo._id}>
                                <Zoom>
                                    <div className='sub-poroject-container'>
                                        <div>
                                            <img src={`data:${proInfo.image.contentType};base64,${proInfo.image.data}`} alt="_image"/>
                                        </div>
                                        <div className='projects-text-contaienr'>
                                            <h6>{proInfo.title}</h6>
                                            <div>
                                                <a href={proInfo.gitHub}  target="framename">Github</a>
                                                <a href={proInfo.liveLink}  target="framename">live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        })
                    }
                </div>
                <MiniFooter />
            </Fade>
        </section>
    );
};

export default Projects;