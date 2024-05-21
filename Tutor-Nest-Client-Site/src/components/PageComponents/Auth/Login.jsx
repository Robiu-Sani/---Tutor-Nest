import { useContext, useState } from "react";
import bgimage from "../../../images/auth.gif";
import loginimag from "../../../images/login.gif";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { AuthContext } from "../../RootComponents/Context/Context";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const [callForm, setCallForm] = useState(true);
  const { LogedUser } = useContext(AuthContext);

  const handleCallForm = () => {
    setCallForm(!callForm);
  };

  if (LogedUser) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <div className="w-full container animate__animated animate__fadeInDown flex p-10 justify-center items-center relative overflow-hidden">
      <img
        src={bgimage}
        alt=""
        className="absolute top-0 min-h-full min-w-full -z-10"
      />
      <Helmet>
        <title>Tutor Ease | Authcation </title>
      </Helmet>
      <div className="grid grid-cols-1 overflow-hidden rounded-md shadow-xl sm:grid-cols-2 max-w-[1000px]">
        <div className="w-full hidden bg-white sm:block">
          <img
            src={loginimag}
            alt="this is login"
            className="max-w-[100%] max-h-full"
          />
        </div>
        <div className="w-full blurBg">
          {callForm ? (
            <LoginForm handleCallForm={handleCallForm} />
          ) : (
            <SignupForm handleCallForm={handleCallForm} />
          )}
        </div>
      </div>
    </div>
  );
}
