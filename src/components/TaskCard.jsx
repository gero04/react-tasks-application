import React from "react";
import EliminarTarea from "./EliminarTarea";

export function TaskCard({ task }) {
  
  return (
    <div>
      <p>
        #{task.id + 1}. {task.title}
      </p>
      <p>{task.description}</p>

      <EliminarTarea props={task}/>
    </div>
  );
}

export default TaskCard;
