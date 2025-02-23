import { useState, createContext, useEffect, use } from "react";
import {arregloDeTareas as data}from "../data/tasks";

//ESTE ES EL NOMBRE DEL CONTEXTO
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function crearTarea(nombre, descripcion) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: nombre,
        description: descripcion,
      },
    ]);
  }

  function eliminarTarea(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  useEffect(() => {
    setTasks(data);
  }, [])
//value en este caso es un objeto que tiene como elementos a tasks, eliminarTarea y crearTarea
  return <TaskContext.Provider value={{
    tasks,
    eliminarTarea,
    crearTarea
  }}>{props.children}</TaskContext.Provider>;
}
