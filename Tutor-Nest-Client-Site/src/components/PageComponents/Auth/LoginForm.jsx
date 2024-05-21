import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import GoogleAuth from "./GoogleAuth";
import PropTypes from "prop-types";
import { AuthContext } from "../../RootComponents/Context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function LoginForm({ handleCallForm }) {
  const [showPassword, setShowPAssword] = useState(false);
  const { LoginUserByEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    LoginUserByEmail(data.email, data.password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast("Login Successfully");
        reset();
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[100%] container animate__animated animate__fadeInDown h-[100%] p-10 flex justify-center items-center flex-col gap-y-10">
      <h1 className="text-center text-4xl font-bold">Login</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-0 md:px-10">
        <div className="w-full relative">
          <MdAttachEmail className="absolute left-4 text-gray-500 top-[14px]" />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full relative mt-7">
          <RiLockPasswordFill className="absolute left-4 text-gray-500 top-[13px]" />
          <div
            onClick={() => setShowPAssword(!showPassword)}
            className="absolute right-3 text-gray-500 cursor-pointer top-[12px]"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>

          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: (value) =>
                /^(?=.*?[A-Z])(?=.*?[a-z])/.test(value) ||
                "Password must contain at least one uppercase and one lowercase letter",
            })}
            className="w-full p-2 border-0 outline-0 px-10 rounded-[25px] bg-gray-200"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <small className="px-3">
          I don`t have any account
          <span
            onClick={() => handleCallForm()}
            className="text-blue-500 underline cursor-pointer"
          >
            Registration
          </span>
        </small>
        <button
          type="submit"
          className="w-full p-2 border shadow-md button bg-transparent outline-0 mt-3 px-10 rounded-[25px]"
        >
          Login
        </button>
      </form>
      <div className="w-full p-0 md:px-10 flex justify-center -mt-5 items-center gap-3">
        <span className="w-full h-[1px] bg-gray-500"></span>
        <span>or</span>
        <span className="w-full h-[1px] bg-gray-500"></span>
      </div>
      <GoogleAuth />
    </div>
  );
}

LoginForm.propTypes = {
  handleCallForm: PropTypes.object,
};
