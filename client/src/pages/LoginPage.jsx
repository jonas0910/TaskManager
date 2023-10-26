import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState: errors } = useForm();
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
          <div className="b" key={i}>
            {error}
          </div>
        ))}

        <h1 className="">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className=""
            placeholder="email"
          />
          {errors.email && <span className="">Email is required</span>}
          <input
            type="password"
            {...register("password", { required: true })}
            className=""
            placeholder="password"
          />
          {errors.password && <p className="">Password is required</p>}
          <button type="submit" className="">
            {" "}
            Logearse
          </button>
        </form>
        <p className="">
          Dont have an account?{" "}
          <Link to="/register" className="">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
