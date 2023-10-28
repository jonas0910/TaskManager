import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./styles/ForAll.css";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { set } from "mongoose";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue, formState: errors } = useForm();
  const { createTask, getTask, updateTask, errors :tasksErrors, success, setSuccess } = useTasks();
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

  const onSubmit = handleSubmit( (data) => {
    if (params.id) {
      updateTask(params.id, {...data,date: dayjs.utc(data.date).format()});
    } else {
      createTask({...data,date: dayjs.utc(data.date).format()});
    }  
  });

  useEffect(() => {
    if(success){
      navigate("/tasks");
      setSuccess(false);
    }
  }, [navigate, success, setSuccess])


  return (
    <div className="contenedor-principal">
      <div>
      {tasksErrors.map((error, i) => (
          <div className="b" key={i}>
            {error}
          </div>
      ))}
      <form onSubmit={onSubmit} className="formulario">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
          autoFocus
        />
        <label htmlFor="dscription">Descripción</label>
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description")}
        ></textarea>
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          {...register("date")}
        />
        <button className="">Save</button>
      </form>
    </div>
    </div>
    
  );
}

export default TaskFormPage;
