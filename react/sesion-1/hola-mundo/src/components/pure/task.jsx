import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task_class";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Tarea creada");
    return () => {
      console.log(`Tarea:${task.name} esta siendo desmonatada `);
    };
  }, [task]);
  // ? Funcion que retorna un badge dependiendo si se trata de un nivel u otro
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOQUEANTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }
  //  ? Funcion que retorna un icono dependiendo si la tarea está completada o no
  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontSize: "large" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: "gray", fontSize: "large" }}
        ></i>
      );
    }
  }
  // ! En un return para renderizar en react podemos retornar cualquier elemento html (casi siempre hay un div por defecto), pero lo importante es que sea un unico elemento tipo padre
  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.desc}</span>
      </td>
      <td className="align-middle">
        {/* //? Ejecuta la funcion para retornar un elemento badge */}
        <span className="ms-2">{taskLevelBadge()}</span>
      </td>
      <td className="align-middle">
        {taskIconCompleted()}
        <i
          onClick={() => remove(task)}
          className="bi-trash task-action"
          style={{ color: "red", fontSize: "large" }}
        ></i>
      </td>
    </tr>
    // <div>
    //   <h2 className="task-name">Nombre: {task.name}</h2>
    //   <h3>Descripcion: {task.desc}</h3>
    //   <h4>Nivel: {task.level}</h4>
    //   <h5>This task is: {task.completed ? "COMPLETADA" : "PENDIENTE"}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
