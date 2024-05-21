import serImage from "../../../images/serviceTeacher.png";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const { count } = useLoaderData();
  const [services_data, setservices_data] = useState([]);
  const [getCurrentPage, setGetCurrentPage] = useState(0);
  const itemOfPAges = 9;
  const numberOfPages = Math.ceil(count / itemOfPAges);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios(
      `${
        import.meta.env.VITE_API_URL
      }/services?page=${getCurrentPage}&size=${itemOfPAges}`
    )
      .then((response) => {
        setservices_data(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [getCurrentPage]);

  const Blank = (
    <div className="container mx-auto p-2 py-7 flex justify-center items-center h-[400px]">
      <h1 className="text-4xl font-bold">There is No Data</h1>
    </div>
  );

  const data = (
    <>
      <div className="container mt-10 p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {services_data.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="w-full pt-10 pb-5 flex justify-center items-center">
        <div className="join">
          <button
            onClick={() =>
              getCurrentPage > 0
                ? setGetCurrentPage(getCurrentPage - 1)
                : setGetCurrentPage(getCurrentPage)
            }
            className="join-item btn"
          >
            «
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`join-item btn ${
                getCurrentPage == page ? "bg-blue-500" : ""
              }`}
              onClick={() => setGetCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() =>
              getCurrentPage < numberOfPages - 1
                ? setGetCurrentPage(getCurrentPage + 1)
                : setGetCurrentPage(getCurrentPage)
            }
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full xl:mt-3 md:mt-[70px] mt-3">
      <Helmet>
        <title>Tutor Ease | About </title>
      </Helmet>
      <div className="container animate__animated animate__fadeInDown -z-10 p-2 relative mx-auto">
        <img src={serImage} alt="" className="w-1/4 ml-4 hidden md:block" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 radius p-5 static md:absolute md:bottom-[11%] ">
          <div className="w-full">
            <img
              src={serImage}
              alt=""
              className="sm:w-full w-2/1 ml-4 block md:hidden"
            />
          </div>
          <div className="w-full col-span-2">
            <h1 className="text-xl sm:text-3xl text-white mb-3 font-bold">
              Empower Your Education with TutorNest Services
            </h1>
            <p className="text-white">
              Discover tailored tutoring, immersive learning opportunities, and
              skilled educators. Transform your academic path with TutorNest`s
              empowering services.
            </p>
            <small className="text-white text-[12px]">
              Explore expert tutoring sessions, personalized learning
              experiences, and affordable educational services. Elevate your
              learning journey with TutorNest today!
            </small>
          </div>
        </div>
      </div>
      {getCurrentPage.length == 0 ? Blank : data}
    </div>
  );
}
