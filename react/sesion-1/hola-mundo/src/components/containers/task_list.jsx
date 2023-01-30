import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task_class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

// import "../../styles/task.css";

const TaskListComponent = (props) => {
  const defaultTask1 = new Task(
    "Ejemplo 1",
    "Descripcion 1 ",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Ejemplo 2",
    "Descripcion 2",
    false,
    LEVELS.URGENTE
  );
  const defaultTask3 = new Task(
    "Ejemplo 3",
    "Descripcion 3",
    false,
    LEVELS.BLOQUEANTE
  );

  // ESTADO DEL COMPONENTE

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // CONTROL DEL CICLO DE VIDA DEL COMPONENTE
  useEffect(() => {
    console.log("Modificacion de tareas");
    setLoading(false);
    return () => {
      console.log("Desmontaje de tareas");
    };
  }, [tasks]);

  function tareaCompletada(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function tareaBorrada(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  function tareaAgregada(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }
  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/*Card Header */}
          <div className="card-header p-3">
            <h5>Tu Tarea:</h5>
          </div>
          {/* Card Body  */}
          {/* //! Lo que pasamos en style lo podemos pasar en una variable y luego pasar esa variable en el parametro style */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Prioridad</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => {
                  return (
                    <TaskComponent
                      key={i}
                      task={task}
                      complete={tareaCompletada}
                      remove={tareaBorrada}
                    ></TaskComponent>
                  );
                })}
                {/* //? Itera sobre una lista de tareas */}
              </tbody>
            </table>
          </div>
          <TaskForm add={tareaAgregada}></TaskForm>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
