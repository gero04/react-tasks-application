import TaskList from "./components/TaskList.jsx"; // Import the TaskList component
import TaskForm from "./components/TaskForm.jsx";
import { arregloDeTareas} from "./data/tasks.js";
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

  return (
    <div>
      <TaskForm createTask={crearTarea} tasks={arregloDeTareas} />
      <TaskList tasks={tasks} />
    </div>
  ); // Render the TaskList component
}
export default App;
