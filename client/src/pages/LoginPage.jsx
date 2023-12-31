import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="contenedor-principal">
      <div className="contenedor-form">
        {signinErrors.map((error, i) => (
          <div className="errors" key={i}>
            {error}
          </div>
        ))}
        

        <h1 className="titulo">Iniciar Sesión</h1>
        <form onSubmit={onSubmit} className="formulario">
          <input
            type="email"
            {...register("email", { required: {value:true, message:"Correo electronico es requerido"} })}
            placeholder="Correo electronico"
          />
          {errors.email && <span className="errors">Email is required</span>}
          <input
            type="password"
            {...register("password", { required: {value:true, message:"Contraseña es requerida"} })}
            placeholder="Contraseña"
          />
          {errors.password && <p className="errors">Password is required</p>}
          <button type="submit" >
            {" "}
            Iniciar Sesion
          </button>
        </form>
        <p className="">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
