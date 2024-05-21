import { Link } from "react-router-dom";
import errorimg from "../../../images/404.gif";
export default function Error() {
  return (
    <div className="flex justify-center bg-[#eae9e8] items-center min-h-screen flex-col">
      <div className="max-w-full relative">
        <img src={errorimg} alt="Error routing" className="max-w-full" />
        <Link
          to={`/`}
          className="airButton absolute top-[13%] right-[25%]"
        ></Link>
      </div>
    </div>
  );
}
