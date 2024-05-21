import { useLoaderData } from "react-router-dom";
import serImage from "../../../../images/boocked.png";
import Servicetr from "./Servicetr";
import { Helmet } from "react-helmet-async";

export default function ServiceToDo() {
  const bockServices = useLoaderData();

  const Blank = (
    <div className="container mx-auto p-2 py-7 flex justify-center items-center h-[400px]">
      <h1 className="text-4xl font-bold">There is No Data</h1>
    </div>
  );

  return (
    <div className="w-full xl:mt-3 md:mt-[70px] mt-3">
      <Helmet>
        <title>Tutor Ease | Services to do </title>
      </Helmet>
      <div className="container animate__animated animate__fadeInDown -z-10 p-2 relative mx-auto">
        <img src={serImage} alt="" className="w-[20%] ml-4 hidden md:block" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 radius p-5 static md:absolute md:bottom-[3%] ">
          <div className="w-full">
            <img
              src={serImage}
              alt=""
              className="sm:w-full w-2/1 ml-4 block md:hidden"
            />
          </div>
          <div className="w-full col-span-2">
            <h1 className="text-xl sm:text-3xl text-white mb-3 font-bold">
              Book Your Expert Tutor Today!
            </h1>
            <p className="text-white">
              Find the perfect tutor for your learning needs and schedule with
              ease. Whether it`s academic support, skill enhancement, or exam
              preparation, discover qualified tutors ready to guide you through
              personalized sessions. Unlock your potential with our convenient
              booking system.
            </p>
            <small className="text-white text-[12px]">
              Explore expert tutoring sessions, personalized learning
              experiences, and affordable educational services.
            </small>
          </div>
        </div>
      </div>
      {bockServices.length == 0 ? (
        Blank
      ) : (
        <div className="container mx-auto p-2 py-7 ">
          <div className="overflow-x-auto">
            <table className="table container animate__animated animate__fadeInDown">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center">Intereasted</th>
                  <th className="text-center">About Services</th>
                  <th className="text-center">On There Mind</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Details</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bockServices.map((service) => (
                  <Servicetr key={service._id} service={service} />
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
