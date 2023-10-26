
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskCard({task}) {
    
    const {deleteTask}=useTasks();
    
    return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
            <h1 className="text-2-xl font-bold">{task.title}</h1>
            <div className="flex gap-x-2 items-center">
                <Link to={`/task/${task._id}`} 
                className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md">Edit</Link>
                <button onClick={
                    () => {
                        deleteTask(task._id)
                    }
                } 
                className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md"
                >
                    Delete
                </button>
            </div>
            </header>
            <p className="text-slate-300">{task.description}</p>
            <p className="text-slate-300">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
    </div>
    )
}

export default TaskCard