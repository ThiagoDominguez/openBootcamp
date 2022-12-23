import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task_class";
// Importando hoja de estilos scss
import "../../styles/task.css";
const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Tarea creada");
    return () => {
      console.log(`Tarea:${task.name} esta siendo desmonatada `);
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name">Nombre: {task.name}</h2>
      <h3>Descripcion: {task.desc}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5>This task is: {task.completed ? "COMPLETADA" : "PENDIENTE"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
