import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task_class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTarea(e) {
    e.preventDefault();
    const nuevaTarea = new Task(
      nameRef.current.value,
      descRef.current.value,
      false,
      levelRef.current.value
    );
    add(nuevaTarea);
    nameRef.current.value = "";
    descRef.current.value = "";
  }

  return (
    <form
      onSubmit={addTarea}
      className="d-flex justify-content-center align-items-center mb-4 p-2"
    >
      <div className="form-outline flex-fill ">
        <input
          ref={nameRef}
          id="inputName"
          className="form-control form-control-lg taskForm"
          type="text"
          placeholder="Inserta tu tarea"
          required
          autoFocus
        ></input>
        <input
          ref={descRef}
          id="inputDesc"
          className="form-control form-control-lg taskForm"
          type="text"
          placeholder="Inserta tu descripcion"
          required
          autoFocus
        ></input>
        <label htmlFor="selectLevel" className="sr-only">
          Prioridad
        </label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
          <option value={LEVELS.NORMAL}>NORMAL</option>
          <option value={LEVELS.URGENTE}>URGENTE</option>
          <option value={LEVELS.BLOQUEANTE}>BLOQUEANTE</option>
        </select>
      </div>

      <br />
      <button type="submit" className="btn btn-success btn-lg mg-2">
        Agregar tarea
      </button>
    </form>
  );
};
TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
