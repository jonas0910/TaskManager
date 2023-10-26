import { Link } from "react-router-dom";
import "./styles/ForAll.css";
import "./styles/HomePage.css";

function HomePage() {
  return (
    <div className="contenedor-principal">
      <div className="contenido">
        <h1 className="bienvenido">Bienvenido</h1>
        <p>Estamos emocionados de tenerte como parte de nuestra comunidad. Con nuestra aplicación, podrás llevar un control eficiente de tus tareas diarias, optimizar tu tiempo y lograr tus metas de manera más efectiva. Para empezar a administrar sus tareas, registrese o inicie sesion.</p>
        <ul className="opciones">
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <img src="/tasks.svg" alt="random" />
    </div>
  );
}

export default HomePage;
