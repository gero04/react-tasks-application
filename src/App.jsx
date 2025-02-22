import TaskList from "./components/TaskList.jsx"; // Import the TaskList component
import TaskForm from "./components/TaskForm.jsx";
import { arregloDeTareas } from "./data/tasks.js";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(arregloDeTareas);
  }, []);

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

  return (
    <div>
      <TaskForm createTask={crearTarea} tasks={arregloDeTareas} />
      <TaskList eliminarTarea={eliminarTarea} tasks={tasks} />
    </div>
  ); // Render the TaskList component
}
export default App;
