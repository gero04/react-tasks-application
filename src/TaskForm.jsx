import { useState, useEffect } from "react";

import React from "react";

function TaskForm({ createTask, tasks }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(nombre, descripcion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="nombreTareaInput"
        placeholder="Ingrese el nombre de la tarea"
        onChange={(event) => {
          setNombre(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        id="descripTareaInput"
        placeholder="Ingrese la descripcion de la tarea"
        onChange={(event) => {
          setDescripcion(event.target.value);
        }}
      />
      <br />
      <br />
      <button>Guardar</button>
      {/* <button>Limpiar</button> */}
    </form>
  );
}

export default TaskForm;
