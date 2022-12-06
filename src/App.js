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

  let mode;
switch (chosenMode) {
    case "easyMode":
        mode = 5;
      break;
    case "normalMode":
        mode = 10
      break;
    case "hardMode":
        mode = 15
      break;
  }
  console.log(chosenMode)

  return (
    <div className="App">
      <ModeSwitcher chooseMode={chooseMode} get/>
        <ModeHandler mode={mode} getLogID={getLogID}  />
        <LogComponent getLogID={logID} />
    </div>
  );
}

export default App;
