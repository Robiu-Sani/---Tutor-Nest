import PropTypes from "prop-types";
import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AuthContext } from "../../RootComponents/Context/Context";
import axios from "axios";

export default function BookServices({ service, handleBackBook, callBook }) {
  const { LogedUser } = useContext(AuthContext);

  const HandleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const allData = {
      services_id: service._id,
      services_name: service.service_name,
      providor_name: service.user.username,
      providor_email: service.user.email,
      providor_image: service.user.user_image,
      instruction: form.instruction.value,
      traking_date: form.traking_date.value,
      user: LogedUser.displayName,
      email: LogedUser.email,
      image: LogedUser.photoURL,
      statuts: "Pending",
      client_status: "Intereasted",
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/boock`, allData)
      .then((response) => {
        console.log(response);
        handleBackBook(!callBook);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full bg-gray-600 flex justify-between items-center p-4">
        <h3 className="text-white font-bold">Book Your Services</h3>
        <RiDeleteBack2Fill
          onClick={() => handleBackBook(!callBook)}
          className="text-white text-xl cursor-pointer"
        />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 border-b">
        <div className="flex justify-center items-center w-full  p-4 border-r-0 border-b sm:border-b-0 sm:border-r ">
          <span>
            <b>Service id:</b> {service._id}
          </span>
        </div>
        <div className="flex justify-center items-center w-full p-4">
          <span>
            <b>Service name:</b> {service.service_name}
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 border-b">
        <div className="flex justify-center items-center w-full border-r-0 border-gray-300 border-b sm:border-b-0 sm:border-r ">
          <div className="w-full">
            <h1 className="p-2 bg-gray-200 text-xl font-bold text-center">
              Providor
            </h1>
            <div className="full grid grid-cols-2">
              <div className="w-full p-2 flex justify-center items-center flex-col gap-2 border-r">
                <b>Provider Name</b>
                <span>{service.user.username}</span>
              </div>
              <div className="w-full p-2 flex justify-center items-center flex-col gap-2">
                <b>Provider Email</b>
                <span>{service.user.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-full">
            <h1 className="p-2 bg-gray-200 text-xl font-bold text-center">
              User
            </h1>
            <div className="full grid grid-cols-2">
              <div className="w-full p-2 flex justify-center items-center flex-col gap-2 border-r">
                <b>User Name</b>
                <span>{LogedUser.displayName}</span>
              </div>
              <div className="w-full p-2 flex justify-center items-center flex-col gap-2">
                <b>Provider Email</b>
                <span>{LogedUser.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-3 border-b grid grid-cols-3">
        <div className="w-full flex justify-center items-center col-span-2">
          <img
            src={service.service_image}
            alt=""
            className="max-w-full max-h-[200px]"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src={service.user.user_image}
            alt=""
            className="max-w-full max-h-[150px]"
          />
        </div>
      </div>
      <form onSubmit={HandleBookSubmit} className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 border-b">
          <div className="flex justify-center items-center w-full  p-2 border-r-0 border-b sm:border-b-0 sm:border-r ">
            <label className="w-full flex justify-center items-center">
              <b className="min-w-[110px]">Tacking Date :</b>
              <input
                type="date"
                name="traking_date"
                className="input w-full"
                required
              />
            </label>
          </div>
          <div className="flex justify-center items-center w-full p-2">
            <input
              type="text"
              name="instruction"
              placeholder="Special instruction"
              className="input w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 border-b">
          <div className="flex justify-center items-center w-full  p-2  ">
            <b>Price : {service.service_price}</b>
          </div>
          <div className="flex justify-center items-center w-full p-2">
            <button className="button w-2/3 border bg-blue-300 z-50 hover:bg-transparent">
              Purchase
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

BookServices.propTypes = {
  service: PropTypes.object,
  handleBackBook: PropTypes.object,
  callBook: PropTypes.object,
};
