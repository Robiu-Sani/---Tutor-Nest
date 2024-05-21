import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import teacher from "../../../images/teacher.png";

export default function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="p-2 animate__animated animate__fadeInLeft -z-10 w-full md:max-w-[50%] flex flex-col justify-center items-start">
          <h1 className="text-center md:text-left text-5xl font-bold">
            Unlock Your Potential with TutorNest <br />{" "}
            <span className="text-gray-500">Where Learning Begins!</span>
          </h1>
          <div className="w-full p-3 flex justify-start items-center relative my-5">
            <div className="h-full w-[1px] absolute left-0 bg-gray-500 line"></div>
            <p>
              Elevate your education with TutorNest. Find expert tutors,
              personalized learning, and unlock your full potential. Join our
              community today for academic success
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center gap-3 p-3">
            <Link
              to={`/services`}
              className="button w-[200px] text-center border shadow-md"
            >
              Services
            </Link>
            <span className="flex justify-center items-center gap-4">
              <HiArrowLongRight className="text-4xl" />
              <small>Find your wish</small>
            </span>
          </div>
          <div className="w-full p-4 hidden md:block">
            <div className="w-full flex justify-start items-center gap-4">
              <Link
                to={`https://www.facebook.com/`}
                className="tooltip tooltip-bottom"
                data-tip="Facebook"
              >
                <FaFacebookSquare className="text-4xl cursor-pointer" />
              </Link>
              <Link
                to={`https://www.instagram.com/`}
                className="tooltip tooltip-bottom"
                data-tip="Instagram"
              >
                <FaInstagramSquare className="text-4xl cursor-pointer" />
              </Link>
              <Link
                to={`https://twitter.com/home`}
                className="tooltip tooltip-bottom"
                data-tip="Twitter"
              >
                <FaSquareXTwitter className="text-4xl cursor-pointer" />
              </Link>
              <Link
                to={`https://bd.linkedin.com/`}
                className="tooltip tooltip-bottom"
                data-tip="Linkedin"
              >
                <FaLinkedin className="text-4xl cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 animate__animated animate__fadeInRight -z-10 w-full md:max-w-[50%] flex flex-col justify-center items-center">
          <img src={teacher} alt="teacher image" className="max-w-full" />
        </div>
      </div>
    </div>
  );
}
