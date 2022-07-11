import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/About_Me/AboutMe';
import Contact from './components/Contact/Contact';
import SucessModal from './components/Contact_Sub_Saction/SucessModal/SucessModal';
import Hobbies from './components/Hobbies/Hobbies';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Porjectshandle from './components/HandleProjects/HandleProjects';
import EditProject from './components/HandleProjects/EditProject/EditProject';
import AddProjects from './components/HandleProjects/AddProjecst/AddProjects';


export const createThemContext = createContext();

function App() {
  const [themInfo, setThemInfo] = useState({
    background: "#EDF9FE",
    class: {
      textClasses: "dark-mood"
    }
  });

  useEffect(() => {
    const themMood = localStorage.getItem("my_web_them");
    const currentState = { ...themInfo }
    if (themMood === "dark") {
      currentState.background = "#1D1B34"
      setThemInfo(currentState)
    } else {
      currentState.background = "#EDF9FE"
      setThemInfo(currentState)
      localStorage.removeItem("my_web_them")
    }

  }, []);


  return (
    <createThemContext.Provider value={[themInfo, setThemInfo]}>
      <div style={{ backgroundColor: themInfo.background }} className={themInfo.background !== "#EDF9FE" && themInfo.class.textClasses}>
        <main className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about_me' element={<AboutMe/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/hobbies' element={<Hobbies/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Porjectshandle/>}/>
            <Route path='/admin/add' element={<AddProjects/>}/>
            <Route path='/admin/:id' element={<EditProject/>}/>
          </Routes>
          <SucessModal/>
        </main>
      </div>
    </createThemContext.Provider>
  );
}

export default App;
