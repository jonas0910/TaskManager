import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import "./styles/TasksPage.css";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="contenedor-tareas">
      {tasks.map((tasks) => (
        <TaskCard key={tasks._id} task={tasks} />
      ))}
    </div>
  );
}

export default TasksPage;
