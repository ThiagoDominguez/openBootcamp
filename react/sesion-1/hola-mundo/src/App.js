import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import Funcgreeting from "./components/pure/func-greeting";
import TaskListComponent from "./components/containers/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* PRIMER COMPONENTE TIPO CLASE  */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* PRIMER COMPONENTE FUNCIONAL */}
        {/* <Funcgreeting name="Thiago"></Funcgreeting> */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
