import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import DeleteServices from "./DeleteService";
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../RootComponents/Context/Context";

export default function ManageServiceCard({ service }) {
  const [CallDelete, setCallDelete] = useState(false);
  const navigate = useNavigate();
  const { LogedUser } = useContext(AuthContext);

  const HandleDeleteCall = (data) => {
    setCallDelete(data);
  };

  const DeleteService = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/services/${service._id}`)
      .then(() => {
        toast("Successfully deleted your service");
        navigate(`/menageServices/${LogedUser.email}`);
      })
      .catch(() => {
        toast.error(
          "Some thing is woring here. check your internet collection."
        );
      });
  };

  return (
    <div className="w-full rounded-md shadow-md border p-1">
      {CallDelete ? (
        <DeleteServices
          DeleteService={DeleteService}
          CallDelete={CallDelete}
          HandleDeleteCall={HandleDeleteCall}
        />
      ) : (
        ""
      )}
      <div className="w-full border-b container animate__animated animate__fadeInDown border-gray-300 grid grid-cols-1 sm:grid-cols-3 justify-center items-center pag-2">
        <img
          src={service.service_image}
          alt=""
          className="col-span-1 sm:col-span-2 h-[200px] mx-auto mb-1 max-w-full"
        />
        <div className="w-full flex flex-col justify-center items-start">
          <small>
            <b>Price</b>
            {service.service_price}
          </small>
          <small>
            <b>Area</b>
            {service.service_area}
          </small>
          <small>
            <b>Type</b>
            {service.service_type}
          </small>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 mb-1">
        <h1 className="text-xl font-bold">
          Services Name : {service.service_name}
        </h1>
        <p className="my-4">
          <b>Description :</b>
          {service.description}
        </p>
        <small>
          <b>Your Speech : </b>
          {service.user.description}
        </small>
      </div>
      <div className="w-full p-3 gap-3 grid grid-cols-2">
        <Link to={`/update/${service._id}`} className="w-full">
          <button className="button border shadow-md w-full">
            Update Data
          </button>
        </Link>

        <button
          onClick={() => setCallDelete(!CallDelete)}
          className="deletButton border shadow-md w-full"
        >
          Delete Data
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

ManageServiceCard.propTypes = {
  service: PropTypes.object,
};
