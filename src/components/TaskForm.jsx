import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import React from "react";

function TaskForm() {

  //de TaskContext me traigo SOLAMENTE el crearTarea
  const { crearTarea } = useContext(TaskContext);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    crearTarea(nombre, descripcion);

    //Limpiamos los valores de los inputs al guardar la tarea
    setNombre("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        // id para identificar este input en especifico
        id="nombreTareaInput"
        // texto en gris que tiene el input vacio
        placeholder="Ingrese el nombre de la tarea"
        // que pasa cuando cambia el input? seteamos el nombre con event.target.value
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        // Establecemos que el valor sea el nombre (cuando pongamos guardar se queda en blanco)
        value={nombre}
        //EL cursor aparece por defecto en este input cuando refrescamos la pagina
        autoFocus
      />
      <br />
      <br />
      <textarea
        // id para identificar este textarea en especifico
        id="descripTareaInput"
        // texto en gris que tiene el input vacio
        placeholder="Ingrese la descripcion de la tarea"
        // que pasa cuando cambia el input? seteamos la descripcion con event.target.value
        onChange={(event) => {
          setDescripcion(event.target.value);
        }}
        value={descripcion}
      />
      <br />
      <br />
      <button>Guardar</button>
      {/* <button>Limpiar</button> */}
    </form>
  );
}

export default TaskForm;
