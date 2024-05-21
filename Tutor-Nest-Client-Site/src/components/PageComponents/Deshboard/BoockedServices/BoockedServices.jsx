import { useLoaderData } from "react-router-dom";
import serImage from "../../../../images/boocked.png";
import BockTr from "./BockTr";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function BoockedServices() {
  const bockService = useLoaderData();
  const [bockServices, setBockServices] = useState(bockService);

  const handleSelectValue = (e) => {
    const selectedValue = e.target.value;
    const filteredServices = bockService.filter(
      (status) => status.statuts === selectedValue
    );
    setBockServices(filteredServices);
  };

  const table = (
    <div className="container mx-auto p-2 py-7 ">
      <Helmet>
        <title>Tutor Ease | Boock services </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table container animate__animated animate__fadeInDown">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Provider</th>
              <th className="text-center">About Services</th>
              <th className="text-center">On Their Mind</th>
              <th className="text-center">Status</th>
              <th className="text-center">Details</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bockServices.map((service) => (
              <BockTr key={service._id} service={service} />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );

  const Blank = (
    <div className="container mx-auto p-2 py-7 flex justify-center items-center h-[400px]">
      <h1 className="text-4xl font-bold">There is No Data</h1>
    </div>
  );

  return (
    <div className="w-full xl:mt-3 md:mt-[70px] mt-3">
      <div className="container animate__animated animate__fadeInDown -z-10  p-2 relative mx-auto">
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
      <div className="w-full pb-10 flex justify-center items-center">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Find Your Data By Status</span>
            <span className="label-text-alt"></span>
          </div>
          <div className="relative min-w-[200px]">
            <select
              onChange={handleSelectValue}
              className="select pl-[70px] w-full select-bordered"
              defaultValue="Pending"
            >
              <option value="Pending">Pending</option>
              <option value="Working">Working</option>
              <option value="Complete">Complete</option>
            </select>
            <button
              onClick={() => setBockServices(bockService)}
              className="btn bg-blue-500 text-white absolute top-0 left-0"
            >
              All
            </button>
          </div>
        </label>
      </div>
      {bockServices.length == 0 ? Blank : table}
    </div>
  );
}
