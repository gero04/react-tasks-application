import React from "react";

export function TaskCard({ task, eliminarTarea }) {
  return (
    <div>
      <p>
        #{task.id + 1}. {task.title}
      </p>
      <p>{task.description}</p>

      <button onClick={() => eliminarTarea(task.id)}>Eliminar tarea...</button>
    </div>
  );
}

export default TaskCard;
