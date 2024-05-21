import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Servicetr({ service }) {
  const [Status, SetStatus] = useState(service.statuts);
  const handleClientStatus = (prevStatus, presentStatus) => {
    if (prevStatus == presentStatus) {
      toast.error("You already in same status");
    } else {
      axios
        .patch(`${import.meta.env.VITE_API_URL}/boock/${service._id}`, {
          statuts: presentStatus,
        })
        .then(() => {
          SetStatus(presentStatus);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    console.log(prevStatus, presentStatus);
  };
  return (
    <tr>
      <td>
        <div className="flex mx-auto justify-start items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={service.image}
                alt="userImage"
                className="rounded-md max-h-full max-w-full"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{service.user}</div>
            <div className="text-sm opacity-50">{service.email}</div>
          </div>
        </div>
      </td>
      <td className="text-center">
        {service.services_name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {service.services_id}
        </span>
      </td>
      <td className="text-center">
        {service.traking_date}
        <br />
        <span className="badge badge-ghost badge-sm">
          {service.instruction}
        </span>
      </td>
      <td className="text-center">{Status}</td>
      <th className="text-center">
        <Link to={`/details/${service.services_id}`}>
          <button className="btn button border shadow-sm w-[100px] py-1 btn-ghost btn-xs">
            View Details
          </button>
        </Link>
      </th>
      <th className="text-center">
        <select
          className="select select-bordered select-xs w-full max-w-xs"
          onChange={(event) =>
            handleClientStatus(service.statuts, event.target.value)
          }
        >
          <option value="Panding" selected>
            Panding
          </option>
          <option value="Working">Working</option>
          <option value="Complete">Complete</option>
        </select>
      </th>
      <ToastContainer />
    </tr>
  );
}

Servicetr.propTypes = {
  service: PropTypes.object,
};
