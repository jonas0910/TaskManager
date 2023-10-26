import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function NavBar() {
    const {isAuthenticated,logout, user} = useAuth()
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={
            isAuthenticated ? "/tasks" : "/"
        }>
            <h1 className="text-2xl font-bold">Task Manager</h1>
        </Link>
        <ul className="opciones">
            {
                isAuthenticated ? (
                    <>
                        <li>
                            Welcome <b> {user.username}</b>
                        </li>
                        <li>
                            <Link to="/add-task">Add Task</Link>
                        </li>
                        <li>
                            <Link onClick={logout}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" >Login</Link>
                        </li>
                        <li>
                            <Link to="/register" >Register</Link>
                        </li>
                    </>
                )
            }
        </ul>
    </nav>
  )
}

export default NavBar