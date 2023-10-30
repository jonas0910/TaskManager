import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./styles/ForAll.css";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm();
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
    console.log(errors);
    if(success){
      navigate("/tasks");
      setSuccess(false);
    }
  }, [navigate, success, setSuccess])


  return (
    <div className="contenedor-principal">
      <div>
      {tasksErrors.map((error, i) => (
          <div className="errors" key={i}>
            {error}
          </div>
      ))}
      
      
      
      <form onSubmit={onSubmit} className="formulario">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: {value:true, message:"El titulo es requerido"}, maxLength: {value:30, message:"El titulo debe tener menos de 15 caracteres"}})}
          autoFocus
        />
        {
        errors.title &&
        <div className="errors">
          {errors.title.message}
        </div>
      }
      
        <label htmlFor="description">Descripción</label>
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description", {required: {value:true, message:"La descripción es requerida"}, maxLength: {value:500, message:"La descripción tiene un maximo de 500 caracteres"}})}
        ></textarea>
        {
        errors.description &&
        <div className="errors">
          {errors.description.message}
        </div>
        }
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
