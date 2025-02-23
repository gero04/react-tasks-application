import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({ task }) {
  const {eliminarTarea} = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 m-4 rounded-lg">
      <h3 className="text-xl font-bold capitalize">
        #{task.id + 1} . {task.title}
      </h3>
      <p className="text-gray-500 text-sm">
        {task.description}
      </p>

      <button className="bg-red-500 px-1 mt-4 mx-auto hover:bg-red-300 rounded-md block" onClick={() => eliminarTarea(task.id)}>Eliminar tarea...</button>
    </div>
  );
}

export default TaskCard;
