import React from "react";
import './App.css';
import EasyMode from "./components/easyMode";
import NormalMode from "./components/normalMode";
import HardMode from "./components/hardMode";
import ModeSwitcher from "./components/modeSwitcher";


function App() {
  const [chosenMode, setChosenMode] = React.useState("");

  const chooseMode = (chosenMode) => {
    setChosenMode(chosenMode);
  }
  let mode;
switch (chosenMode) {
    case "easyMode":
        mode = <EasyMode />
      break;
    case "normalMode":
        mode = <NormalMode />
      break;
    case "hardMode":
        mode = <HardMode />
      break;
  }
  console.log(chosenMode)

  return (
    <div className="App">

      <ModeSwitcher chooseMode={chooseMode} />
        {mode}
    </div>
  );
}

export default App;
