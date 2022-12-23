import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock-class";
import { ClockFunction } from "./components/clock-function";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock></Clock>
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
