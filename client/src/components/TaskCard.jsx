
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import './styles/TaskCard.css'
import imgEliminar from '../assets/TaskCard/eliminar.svg'
import imgEditar from '../assets/TaskCard/editar.svg'
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskCard({task}) {
    
    const {deleteTask}=useTasks();
    
    return (
    <div className="tarjeta">
            <header className="cabecera">
            <h1 className="titulo-tarea">{task.title}</h1>
            <div className="opciones">
                <Link to={`/task/${task._id}`} className="editar">
                <img className="icono" src={imgEditar} alt="" />
                </Link>
                <button onClick={
                    () => {
                        deleteTask(task._id)
                    }
                } 
                className="eliminar">
                    <img className="icono" src={imgEliminar} alt="" />
                </button>
            </div>
            </header>
            <p className="contenido">{task.description}</p>
            <p className="contenido">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
    </div>
    )
}

export default TaskCard