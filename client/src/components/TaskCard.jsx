
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import './styles/TaskCard.css'
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskCard({task}) {
    
    const {deleteTask}=useTasks();
    
    return (
    <div className="tarjeta">
            <header className="cabecera">
            <h1 className="titulo">{task.title}</h1>
            <div className="opciones">
                <Link to={`/task/${task._id}`} className="editar">Editar</Link>
                <button onClick={
                    () => {
                        deleteTask(task._id)
                    }
                } 
                className="eliminar">
                    Eliminar
                </button>
            </div>
            </header>
            <p className="contenido">{task.description}</p>
            <p className="contenido">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
    </div>
    )
}

export default TaskCard