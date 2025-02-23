import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskContextProvider, TaskContext } from "./context/TaskContext.jsx";
import 'virtual:windi.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>
);
