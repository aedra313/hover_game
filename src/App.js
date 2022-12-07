import React from "react";
import './App.css';
import ModeSwitcher from "./components/modeSwitcher";
import ModeHandler from "./components/modeHandler";
import LogComponent from "./components/logComponent";
import Header from "./components/header";
import s from "./app.module.css"


function App() {
  const [chosenMode, setChosenMode] = React.useState("");
    const [logID, setLogID] = React.useState("");

  const chooseMode = (chosenMode) => {
    setChosenMode(chosenMode);
  }

    const getLogID = (logID) => {
        setLogID(logID);
    }
    console.log(logID)



  return (
    <div className={s.body}>
        <Header chosenMode={chosenMode} />
        <main className={s.main}>
            <div className={s.wrapper}>
        <ModeSwitcher chooseMode={chooseMode} get/>
        <ModeHandler chosenMode={chosenMode} getLogID={getLogID}  />
        <LogComponent getLogID={logID} />
            </div>
        </main>
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <p className="credentials">Developed by Vladyslav O. As a pet project</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
