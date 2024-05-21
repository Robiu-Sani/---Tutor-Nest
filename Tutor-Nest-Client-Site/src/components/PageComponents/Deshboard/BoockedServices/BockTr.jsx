import axios from "axios";
import PropTypes from "prop-types";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BockTr({ service }) {
  const handleClientStatus = (prevStatus, presentStatus) => {
    if (prevStatus == presentStatus || prevStatus == "Reject") {
      alert("you can not change your dtatus");
    } else {
      axios
        .patch(`${import.meta.env.VITE_API_URL}/boock/${service._id}`, {
          statuts: "Complete",
        })
        .then((response) => {
          console.log(response);
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
                src={service.providor_image}
                alt="userImage"
                className="rounded-md max-h-full max-w-full"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{service.providor_name}</div>
            <div className="text-sm opacity-50">{service.providor_email}</div>
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
      <td className="text-center">{service.statuts}</td>
      <th className="text-center">
        <Link to={`/details/${service.services_id}`}>
          <button className="btn button border shadow-sm w-[100px] py-1 btn-ghost btn-xs">
            View Details
          </button>
        </Link>
      </th>
      <th className="text-center">
        <button className="tooltip tooltip-bottom" data-tip="Complete">
          <IoCheckmarkDoneCircle
            onClick={() => handleClientStatus(service.statuts, "Complete")}
            className="text-2xl text-gray-600 cursor-pointer"
          />
        </button>
      </th>
    </tr>
  );
}

BockTr.propTypes = {
  service: PropTypes.object,
};
