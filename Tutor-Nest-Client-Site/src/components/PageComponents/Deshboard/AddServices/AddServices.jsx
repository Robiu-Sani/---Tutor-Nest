import { useContext } from "react";
import bgimage from "../../../../images/auth.gif";
import { FaUser, FaImage } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdAreaChart } from "react-icons/md";
import { SiQuicktype } from "react-icons/si";
import { TbFileDescription } from "react-icons/tb";
import { AuthContext } from "../../../RootComponents/Context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function AddServices() {
  const { LogedUser } = useContext(AuthContext);
  const HandleAddService = (e) => {
    e.preventDefault();
    const GetValue = e.target;
    const formValue = {
      service_image: GetValue.service_image.value,
      service_name: GetValue.service_name.value,
      service_type: GetValue.service_type.value,
      service_price: GetValue.service_price.value,
      service_area: GetValue.service_area.value,
      description: GetValue.description.value,
      user: {
        username: LogedUser.displayName,
        email: LogedUser.email,
        user_image: LogedUser.photoURL,
        description: GetValue.user_description.value,
      },
    };
    GetValue.reset();
    axios
      .post(`${import.meta.env.VITE_API_URL}/services`, formValue)
      .then(() => {
        toast("You Added Successfylly");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full flex p-2 md:p-10 justify-center items-center relative overflow-hidden">
      <ToastContainer />
      <img
        src={bgimage}
        alt=""
        className="absolute top-0 min-h-full min-w-full -z-10"
      />
      <Helmet>
        <title>Tutor Ease | Add Services </title>
      </Helmet>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center p-0 md:p-5 ">
        <div className="p-4 w-full sm:max-w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-gray-700 text-center font-bold my-3">
            About Add Service
          </h1>
          <p className="text-gray-500 text-center sm:text-left text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ratione similique ex voluptates in, harum a sit voluptatibus laborum
            obcaecati, animi iusto voluptatem. Inventore laudantium nobis natus
            iste dignissimos laborum!
          </p>
          <div className="w-full flex justify-center sm:justify-start">
            <button className="button shadow-md mt-4 text-center border w-[200px]">
              Read more...
            </button>
          </div>
        </div>
        <form
          onSubmit={HandleAddService}
          className="p-10 w-full flex flex-col justify-center items-center gap-4 h-full sm:max-w-1/2 customBorder"
        >
          <h1 className="text-3xl text-gray-700 text-center font-bold mb-3">
            Add Service
          </h1>
          <label className="relative w-full">
            <FaImage className="absolute top-3 left-4" />
            <input
              type="text"
              name="service_image"
              placeholder="Image URL of the Service"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
              required
            />
          </label>
          <label className="relative w-full">
            <SiQuicktype className="absolute top-[12px] left-4" />
            <input
              type="text"
              placeholder="Service Types"
              name="service_type"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
              required
            />
          </label>
          <label className="relative w-full">
            <FaUser className="absolute top-[10px] left-4" />
            <input
              type="text"
              placeholder="Service Name"
              name="service_name"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
              required
            />
          </label>
          <label className="relative w-full">
            <ImPriceTags className="absolute top-3 left-4" />
            <input
              type="text"
              placeholder="Service Price"
              name="service_price"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
              required
            />
          </label>
          <label className="relative w-full">
            <MdAreaChart className="absolute top-[12px] left-4" />
            <input
              type="text"
              placeholder="Service Area"
              name="service_area"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[25px] bg-gray-200"
              required
            />
          </label>
          <label className="relative w-full">
            <TbFileDescription className="absolute top-[12px] left-4" />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[10px] bg-gray-200"
            ></textarea>
          </label>
          <label className="relative w-full">
            <TbFileDescription className="absolute top-[12px] left-4" />
            <textarea
              name="user_description"
              placeholder="User Introduction"
              className="w-full p-2 border-0 outline-0 pl-10 rounded-[10px] bg-gray-200"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full p-2 border shadow-md button bg-transparent outline-0 px-10 rounded-[25px]"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}
