import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import TextField from "../../ui/TextField";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <TextField
          type="text"
          name="username"
          register={register}
          required
          label="نام کاربری"
          validationSchema={{
            required: "نام کاربری ضروری است",
          }}
          errors={errors}
        />
      </div>
      <div className="mb-5">
        <TextField
          type="password"
          name="password"
          label="رمز عبور"
          register={register}
          required
          validationSchema={{
            required: "رمز عبور ضروری است",
          }}
          errors={errors}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary w-full hover:bg-primary-600"
      >
        ورود
      </button>
    </form>
  );
}

export default LoginForm;
