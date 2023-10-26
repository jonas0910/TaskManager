import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).format("YYYY-MM-DD"));
        
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, {...data,date: dayjs.utc(data.date).format()});
    } else {
      createTask({...data,date: dayjs.utc(data.date).format()});
    }
    navigate("/tasks");
  });
  return (
    <div className="contenedor-principal">
      <div className="contenedor-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className=""
        />
        <label htmlFor="dscription">Description</label>
        <textarea
          rows="3"
          placeholder="Desccription"
          {...register("description")}
          className=""
        ></textarea>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          {...register("date")}
          className=""
        />
        <button className="">Save</button>
      </form>
    </div>
    </div>
    
  );
}

export default TaskFormPage;
