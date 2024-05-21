import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../RootComponents/Context/Context";

export default function GoogleAuth() {
  const { LoginWithGoogle } = useContext(AuthContext);

  const handleGoogleAuth = () => {
    LoginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .then((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="p-0 md:px-10 w-full -mt-5">
      <button
        onClick={handleGoogleAuth}
        className="p-4 button w-full shadow-md flex justify-center items-center gap-3"
      >
        <AiFillGoogleCircle className="text-xl" />
        <p>Juin with google</p>
      </button>
    </div>
  );
}
