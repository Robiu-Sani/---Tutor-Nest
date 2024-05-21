import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import PropTypes from "prop-types";
import loaring from "../../../images/loader.gif";

export default function Private({ children }) {
  const { LogedUser, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center bg-[#e0dfdf] w-full min-h-[500px]">
        <img src={loaring} className="max-w-full max-h-full" />
      </div>
    );
  }

  if (LogedUser) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={`/login`} replace={true}></Navigate>
  );
}

Private.propTypes = {
  children: PropTypes.object,
};
