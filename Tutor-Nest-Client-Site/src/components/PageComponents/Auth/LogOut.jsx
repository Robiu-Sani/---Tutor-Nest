import { useContext } from "react";
import { AuthContext } from "../../RootComponents/Context/Context";

export default function LogOut() {
  const { LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut();
  };
  return (
    <button
      className="text-center w-[80px] flex justify-center items-center rounded-md cursor-pointer button border"
      onClick={handleLogout}
    >
      LogOut
    </button>
  );
}
