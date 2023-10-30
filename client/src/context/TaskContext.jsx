import { createContext, useContext, useState, useEffect } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/task.js";
import { set } from "mongoose";

const TaskContent = createContext();


export const useTasks = () => {
  const context = useContext(TaskContent);
  
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (errors.length > 0) {
        const timer = setTimeout(() => {
            setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
    }
}, [errors]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
      setErrors([error.response.data]);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      setSuccess(true);
    } catch (error) {
      console.log([error.response.data])
      setErrors([error.response.data]);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
      setErrors([error.response.data]);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data
    } catch (error) {
      console.log(error);
      setErrors([error.response.data]);
    }
  };

  const updateTask = async (id,task) => {
    try {
      const res = await updateTaskRequest(id,task);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrors([error.response.data]);
    }
  };
  return (
    <TaskContent.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
        errors,
        success,
        setSuccess
      }}
    >
      {children}
    </TaskContent.Provider>
  );
}
