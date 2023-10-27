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
          <div className="" key={i}>
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
          {errors.username && <span className="">Username is required</span>}

          <input
            type="email"
            {...register("email", { required: true })}
            className=""
            placeholder="Correo electronico"
          />
          {errors.email && <span className="">Email is required</span>}
          <input
            type="password"
            {...register("password", { required: true })}
            className=""
            placeholder="Contraseña"
          />
          {errors.password && <p className="t">Password is required</p>}
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
