import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task_class";
import TaskComponent from "../pure/task";

import "../../styles/task.css";

const TaskListComponent = (props) => {
  const defaultTask = new Task(
    "Ejemplo",
    "Descripcion predeterminada",
    false,
    LEVELS.NORMAL
  );

  // ESTADO DEL COMPONENTE

  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // CONTROL DEL CICLO DE VIDA DEL COMPONENTE
  useEffect(() => {
    console.log("Modificacion de tareas");
    setLoading(false);
    return () => {
      console.log("Desmontaje de tareas");
    };
  }, [tasks]);

  const cambioCompletado = (id) => {
    console.log("TODO: cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Tu Tarea:</h1>
        {/* TODO: Aplicar un for/map para renderizar una lista de tareas*/}
      </div>
      <TaskComponent task={defaultTask}> </TaskComponent>
    </div>
  );
};

export default TaskListComponent;
