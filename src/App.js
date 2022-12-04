import React from "react";
import './App.css';
import ModeSwitcher from "./components/modeSwitcher";
import ModeHandler from "./components/modeHandler";


function App() {
  const [chosenMode, setChosenMode] = React.useState("");

  const chooseMode = (chosenMode) => {
    setChosenMode(chosenMode);
  }
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
      <ModeSwitcher chooseMode={chooseMode} />
        <ModeHandler mode={mode} />
    </div>
  );
}

export default App;
