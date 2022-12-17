import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task_class";
import TaskComponent from "../pure/task";

const TaskListComponent = (props) => {
  const cambioEstado = (id) => {
    console.log("TODO: cambiar estado de una tarea");
  };

  const defaultTask = new Task(
    "Ejemplo",
    "Descripcion predeterminada",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <div>
        Tu Tarea:
        {/* TODO: Aplicar un for/map para renderizar una lista de tareas*/}
      </div>
      <TaskComponent task={defaultTask}> </TaskComponent>
    </div>
  );
};

export default TaskListComponent;
