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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-300 p-10">
        
        <h1 className="text-center text-2xl font-bold font-mono text-white mb-3">Crea tu tarea</h1>
        
        
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
          className="w-full"
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
          className="w-full"
        />
        <br />
        <br />
        <button 
        className="bg-indigo-500 text-white p-2 rounded-md mx-auto block hover:bg-indigo-800"
        >
          Guardar
        </button>
        {/* <button>Limpiar</button> */}
      </form>
    </div>
  );
}

export default TaskForm;
