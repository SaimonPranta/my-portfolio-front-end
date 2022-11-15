import React, { useEffect, useState } from 'react';
import './HandleProjects.css';
import Header from '../Header/Header';
import { Fade, Zoom } from 'react-reveal';
import MiniFooter from '../Mini_Footer/MiniFooter';
import { NavLink } from 'react-router-dom';

const Porjectshandle = () => {
    const [porjectInfo, setProjectInfo] = useState([])
    const cooki = document.cookie.split("=")[1];

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROJECT_API}/api/porjects`, {
            method: "GET"
        })
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

    const handleDeleteProduct = (event, projectId, projectName) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_PROJECT_API}/api/single_porject?id=${projectId}&ImgName=${projectName}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${cooki}`
              }
        })
            .then(res => res.json())
            .then(data => {
                if (data.sucess) {
                    event.target.parentNode.parentNode.parentNode.parentNode.remove()
                }

            })
    }


    return (
        <section style={{minHeight: "100vh"}}>
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
                                            <img src={`${process.env.REACT_APP_PROJECT_API}/${proInfo.img}`} alt="_image" />
                                        </div>
                                        <div className='projects-text-contaienr'>
                                            <h6>{proInfo.title}</h6>
                                            <div>
                                                <NavLink to={proInfo._id} >Edit</NavLink>
                                                <a href='' onClick={(event) => handleDeleteProduct(event, proInfo._id, proInfo.img)}>Delete</a>
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