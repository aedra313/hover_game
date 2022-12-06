import React from "react";
import './App.css';
import ModeSwitcher from "./components/modeSwitcher";
import ModeHandler from "./components/modeHandler";
import LogComponent from "./components/logComponent";


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
    <div className="App">
        <ModeSwitcher chooseMode={chooseMode} get/>
        <ModeHandler chosenMode={chosenMode} getLogID={getLogID}  />
        <LogComponent getLogID={logID} />
    </div>
  );
}

export default App;
