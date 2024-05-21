import { useLoaderData } from "react-router-dom";
import serImage from "../../../../images/teacher.png";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet-async";

export default function MenageServices() {
  const Blank = (
    <div className="container mx-auto p-2 py-7 flex justify-center items-center h-[400px]">
      <h1 className="text-4xl font-bold">There is No Data</h1>
    </div>
  );

  const services = useLoaderData();
  return (
    <div className="w-full rounded-md shadow-md p-2 overflow-hidden flex flex-col justify-center items-center">
      <Helmet>
        <title>Tutor Ease | Manage Services </title>
      </Helmet>
      <div className="container animate__animated animate__fadeInDown -z-10 relative mx-auto">
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
              Teaching Service Administration Hub
            </h1>
            <p className="text-white">
              Empower administrators with comprehensive tools to oversee and
              optimize teaching services efficiently.
            </p>
            <small className="text-white text-[12px]">
              The `Teaching Service Administration Hub` section provides
              administrators with robust tools to manage all aspects of teaching
              services within the educational institution. From overseeing
              course creation and scheduling to managing instructor assignments
              and student enrollments, this feature streamlines administrative
              tasks.
            </small>
          </div>
        </div>
      </div>

      {services.length == 0 ? (
        Blank
      ) : (
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <ManageServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
