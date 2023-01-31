// import logo from "./logo.svg";
import "./styles/task.scss";
import "./App.css";
// import { ComponenteContexto } from "./hooks/ejemplo3";
// import { Ejemplo4 } from "./hooks/ejemplo4";
// import DidMount, { DidMountHook } from "./hooks/lifecycle/DidMount";
// import DidUpdate, { DidUpdateHook } from "./hooks/lifecycle/DidUpdate";
// import WillUnmount, { WillUnmountHook } from "./hooks/lifecycle/WillUnMount";
// import { AllCycles } from "./hooks/lifecycle/AllCycles";
// import Greeting from "./components/pure/greeting";
// import Funcgreeting from "./components/pure/func-greeting";
import TaskListComponent from "./components/containers/task_list";
import TasksPages from "./pages/tasks/TasksPages";
// import { Father } from "./components/containers/father";
// import { GreetingStyled } from "./components/pure/greetingStyled";
// import { Ejemplo1 } from "./hooks/ejemplo1";
// import { Ejemplo2 } from "./hooks/ejemplo2";

function App() {
  return (
    <div className="App">
      {/* PRIMER COMPONENTE TIPO CLASE  */}
      {/* <Greeting name="Martin"></Greeting> */}
      {/* //?PRIMER COMPONENTE FUNCIONAL */}
      {/* <Funcgreeting name="Thiago"></Funcgreeting> */}
      {/* //? Componente del proyecto */}
      {/* <TaskListComponent></TaskListComponent> */}
      <TasksPages></TasksPages>
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <ComponenteContexto></ComponenteContexto> */}
      {/* <Ejemplo4 nombre="Thiago"> */}
      {/* //? todo lo que haya aqui es tratado como props.children en cualquier componente */}
      {/* <h3>Contenido del props.children</h3> */}
      {/* </Ejemplo4> */}
      {/* CICLO DE VIDA */}
      {/*//? 1- DidMount */}
      {/* <DidMount></DidMount> */}
      {/* <DidMountHook></DidMountHook> */}
      {/*//? 2- DidUpdate */}
      {/* <DidUpdate></DidUpdate> */}
      {/* <DidUpdateHook></DidUpdateHook> */}
      {/*//? 3- WillUnMount */}
      {/* <WillUnmount></WillUnmount> */}
      {/* <WillUnmountHook></WillUnmountHook> */}
      {/* ALL CYCLES */}
      {/* <AllCycles /> */}

      {/* <GreetingStyled name="Thiago"></GreetingStyled> */}

      {/* //?Gestion de eventos */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
