import './App.css';
import EasyMode from "./components/easyMode";
import NormalMode from "./components/normalMode";
import HardMode from "./components/hardMode";

function App() {
  return (
    <div className="App">
    <EasyMode />
      <hr/>
      <NormalMode />
      <hr/>
      <HardMode />
    </div>
  );
}

export default App;
