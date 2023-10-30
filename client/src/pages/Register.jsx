import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="contenedor-principal">
      <div className="contenedor-form">
        {RegisterErrors.map((error, i) => (
          <div className="errors" key={i}>
            {error}
          </div>
        ))}
        

        <h1 className="titulo">Register</h1>
        <form onSubmit={onSubmit} className="formulario">
          <input
            type=""
            {...register("username", { required: true })}
            className=""
            placeholder="Nombre de usuario"
          />
          {errors.username && <span className="errors">Nombre de usuario requerido</span>}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Correo electronico"
          />
          {errors.email && <span className="errors">Correo electronico requerido</span>}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          {errors.password && <p className="errors">Se requiere de una contraseña</p>}
          <button type="submit" className="">
            Registrarse
          </button>
        </form>
        <p className="">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="">
            Inicie Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
