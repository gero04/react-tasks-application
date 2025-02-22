import TaskCard from "./TaskCard";

function TaskList({tasks, eliminarTarea}) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} eliminarTarea={eliminarTarea} />
      ))}
    </div>
  );
}

export default TaskList;
