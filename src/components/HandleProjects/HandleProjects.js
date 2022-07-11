import React, { useEffect, useState } from 'react';
import './HandleProjects.css';
import Header from '../Header/Header';
import { Fade, Zoom } from 'react-reveal';
import MiniFooter from '../Mini_Footer/MiniFooter';
import { NavLink } from 'react-router-dom';

const Porjectshandle = () => {
    const [porjectInfo, setProjectInfo] = useState({})

    useEffect(() => {
        fetch(process.env.REACT_APP_PROJECT_API)
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
    const handleDeleteProduct = (event, projectId) => {
        event.preventDefault();
        console.log(projectId)
        fetch(`http://localhost:7000/api/single_porject?id=${projectId}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.sucess) {
                event.target.parentNode.parentNode.parentNode.parentNode.remove()
            }

        })
    }


    return (
        <section>
        <Header />

        <Fade bottom duration={2000} distance="40px">
            <div className='project-sub-taitel'>
                <h4>Projects Admin Panel</h4>
                <NavLink to='/admin/add' >Add Porject</NavLink>
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
                                            <NavLink to={proInfo._id} >Edit</NavLink>
                                            <a href='' onClick={ (event) => handleDeleteProduct(event, proInfo._id)}>Delete</a>
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

export default Porjectshandle;