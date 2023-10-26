import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './styles/NavBar.css'

function NavBar() {
    const {isAuthenticated,logout, user} = useAuth()
  return (
    <nav className="nav">
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