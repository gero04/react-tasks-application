import TaskList from "./components/TaskList.jsx"; // Import the TaskList component
import TaskForm from "./components/TaskForm.jsx";

function App() {
  

  return (
    <main className="bg-zinc-700 h-screen">
      <div className="container mx-auto bg-yellow p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  ); // Render the TaskList component
}
export default App;
