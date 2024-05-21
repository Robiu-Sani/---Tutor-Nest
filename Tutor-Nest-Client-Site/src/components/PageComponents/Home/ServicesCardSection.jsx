import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../Services/ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesCardSection() {
  const [servicesCard, setServicesCard] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/services?page=${0}&size=${6}`)
      .then((response) => {
        setServicesCard(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto text-center">
        <h2 className="text-4xl max-w-4xl mx-auto font-bold mb-8">
          Popular Services
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          Tutor services is the embodiment of creativity and skill, intertwining
          tradition with innovation to produce objects of beauty and
          functionality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {servicesCard &&
            servicesCard.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block"
          >
            Explore All
          </Link>
        </div>
      </div>
    </div>
  );
}
