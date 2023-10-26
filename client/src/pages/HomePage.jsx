import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="contenedor-principal">
      <div className="">
        <h1 className="">Bienvenido</h1>
        <p>Para empezar a administrar sus tareas, registrarse o logearse.</p>
        <ul className="">
          <li>
            <Link to="/login" className="">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <img className="  " src="/tasks.svg" alt="random" />
    </div>
  );
}

export default HomePage;
