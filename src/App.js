import { createContext, useEffect, useState } from 'react';
import './App.css';
import SucessModal from './components/Contact_Sub_Saction/SucessModal/SucessModal';
import Routess from './Routess/Routes';

export const createThemContext = createContext();
export const adminContext = createContext();


function App() {
  const [isAdmin, setIsAdmin] = useState({ isAdmin: false })
  const [themInfo, setThemInfo] = useState({
    background: "#EDF9FE",
    class: {
      textClasses: "dark-mood"
    }
  });
  const cooki = document.cookie.split("=")[1];


  useEffect(() => {
    const themMood = localStorage.getItem("my_web_them");
    const currentState = { ...themInfo }
    if (themMood === "day_mood") {
      currentState.background = "#EDF9FE" //white color
      setThemInfo(currentState)
    } else {
      currentState.background = "#1D1B34" // dark color
      setThemInfo(currentState)
      localStorage.removeItem("my_web_them")
    }

  }, []);

  useEffect(() => {
    if (cooki) {
      fetch(`${process.env.REACT_APP_PROJECT_API}/authentication`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization: `Bearer ${cooki}`
        }
      }).then(res => res.json())
        .then(data => {
          const currentCon = { ...isAdmin }
          if (data.sucess) {
            currentCon['isAdmin'] = true
            setIsAdmin(currentCon)
          } else {
            currentCon['isAdmin'] = false
            setIsAdmin(currentCon)
          }
        })
    }


  }, []);


  return (
    <adminContext.Provider value={[isAdmin, setIsAdmin]}>
      <createThemContext.Provider value={[themInfo, setThemInfo]}>
        <div style={{ backgroundColor: themInfo.background, maxWidth: "100vw", minHeight: "100vh"}} className={themInfo.background !== "#EDF9FE" ? themInfo.class.textClasses : null}>
          <main className="App">
            <Routess />
            <SucessModal />
          </main>
        </div>
      </createThemContext.Provider>
    </adminContext.Provider>
  );
}

export default App;
