import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/pure/component-a";
import { Contacto } from "./models/contacto.class";

function App() {
  const contactoPrueba = new Contacto(
    "Thiago",
    "Dominguez",
    "thiagodominguez4@gmail.com",
    false
  );
  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contacto={contactoPrueba}></ComponentA>
      </header>
    </div>
  );
}

export default App;
