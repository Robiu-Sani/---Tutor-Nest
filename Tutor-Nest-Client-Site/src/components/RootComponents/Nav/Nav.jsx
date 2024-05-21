import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import Them from "./Tnem";
import { IoHomeOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { IoMdLogIn } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import { Tooltip } from "react-tooltip";
import {
  MdAdminPanelSettings,
  MdAddBusiness,
  MdOutlineManageHistory,
} from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import LogOut from "../../PageComponents/Auth/LogOut";
import { LiaInfoSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import SearchBox from "../../PageComponents/SearchBox/SearchBox";

export default function Nav() {
  const { LogedUser } = useContext(AuthContext);
  const [searchCall, setSearchCall] = useState(false);

  const nonLogedItem = (
    <>
      <li>
        <NavLink to={`/`}>
          <IoHomeOutline /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={`/about`}>
          <LiaInfoSolid /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to={`/services`}>
          <GrServices /> Services
        </NavLink>
      </li>
      <li>
        <NavLink to={`/login`}>
          <IoMdLogIn /> Log-in
        </NavLink>
      </li>
      <Them />
    </>
  );

  const logedItem = (
    <>
      <li>
        <NavLink to={`/`}>
          <IoHomeOutline /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={`/about`}>
          <LiaInfoSolid /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to={`/services`}>
          <GrServices /> Services
        </NavLink>
      </li>
      <li>
        <details className="relative">
          <summary>
            <MdAdminPanelSettings /> Deshboard
          </summary>
          <ul className="p-2 absolute bg-white z-[1000] -left-3">
            <li className="w-[170px]">
              <NavLink to={"/addServices"}>
                <MdAddBusiness /> Add Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/menageServices/${LogedUser ? LogedUser.email : ""}`}
              >
                <MdOutlineManageHistory /> Manage Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/bookedServices/${LogedUser ? LogedUser.email : ""}`}
              >
                <CiBookmarkCheck /> Boocked Service
              </NavLink>
            </li>
            <li>
              <NavLink to={`/serviceToDo/${LogedUser ? LogedUser.email : ""}`}>
                <FaArrowsTurnToDots /> Service To Do
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Them />
      </li>
      <li className="flex justify-center items-center my-3 md:my-0">
        <LogOut />
      </li>
      <div className="flex gap-3 ml-2 z-0 justify-center items-center hoverImage">
        {LogedUser ? (
          <img
            src={LogedUser.photoURL}
            className="w-10 h-10 cursor-pointer rounded-full z-50 "
            data-tooltip-id="my-tooltip"
            data-tooltip-content={LogedUser.displayName}
          />
        ) : (
          <FaCircleUser className="text-3xl" />
        )}
      </div>
    </>
  );

  const handleSearchBox = (data) => {
    setSearchCall(data);
  };

  return (
    <div className="animate__animated animate__fadeInDown bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {LogedUser ? logedItem : nonLogedItem}
            </ul>
          </div>
          <div className="flex justify-center items-center md:gap-10 gap-5">
            <Link
              to={`/`}
              className="flex justify-center min-w-[240px] items-center gap-3 "
            >
              <div className="bg-gray-300 p-2 rounded-md">
                <img src={logo} alt="Logo" className="h-10" />
              </div>
              <h1 className="text-3xl font-bold">
                Tutor <span className="text-gray-500">Nest</span>
              </h1>
            </Link>
            <FaSearch
              onClick={() => setSearchCall(!searchCall)}
              className="text-xl cursor-pointer"
            />
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal z-[100] px-1">
              {LogedUser ? logedItem : nonLogedItem}
            </ul>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      {searchCall ? (
        <SearchBox handleSearchBox={handleSearchBox} searchCall={searchCall} />
      ) : (
        ""
      )}
    </div>
  );
}
