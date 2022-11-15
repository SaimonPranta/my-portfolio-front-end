import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from '../components/About_Me/AboutMe';
import Contact from '../components/Contact/Contact';
import AddProjects from '../components/HandleProjects/AddProjecst/AddProjects';
import EditProject from '../components/HandleProjects/EditProject/EditProject';
import Porjectshandle from '../components/HandleProjects/HandleProjects';
import Hobbies from '../components/Hobbies/Hobbies';
import Home from '../components/Home/Home';
import Login from '../components/Privet_Section/Login/Login';
import Privet_Route from '../components/Privet_Section/Privet_Route/Privet_Route';
import Projects from '../components/Projects/Projects';
import Not_Found from '../Not_Found/Not_Found';


const Routess = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about_me' element={<AboutMe />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/hobbies' element={<Hobbies />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path="/admin" element={
                    <Privet_Route>
                        <Porjectshandle />
                    </Privet_Route>
                }></Route>
                <Route path="/admin/add" element={
                    <Privet_Route>
                        <AddProjects />
                    </Privet_Route>
                }></Route>
                <Route path="/admin/:id" element={
                    <Privet_Route>
                        <EditProject />
                    </Privet_Route>
                }></Route>

                <Route path='/*' element={<Not_Found />} />








            </Routes>
        </>
    );
};

export default Routess;