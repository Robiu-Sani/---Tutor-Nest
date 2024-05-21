import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="w-full container animate__animated animate__fadeInDown rounded-md shadow-md overflow-hidden flex flex-col justify-center items-center">
      <img
        src={service.service_image}
        alt=""
        className="max-w-full h-[200px] "
      />
      <div className="w-full p-2">
        <h2 className="text-xl font-bold">{service.service_name}</h2>
        <small className="my-2 text-justify">{service.description}</small>
        <div className="w-full bg-gray-100 p-2 rounded-sm">
          <small>
            <b>Area : </b>
            {service.service_area}
          </small>
          <br />
          <small>
            <b>Price : </b>
            {service.service_price}
          </small>
        </div>
        <div className="w-full p-2 flex justify-start items-center gap-3">
          <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
            <img src={service.user.user_image} alt="" className="h-full" />
          </div>
          <div className="w-[calc(100% - 48px)]">
            <small>{service.user.username}</small>
            <br />
            <small>{service.user.email}</small>
          </div>
        </div>
        <hr />
        <div className="w-full p-2">
          <Link to={`../details/${service._id}`}>
            <button className="button w-[200px] border"> View details </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.object,
};
