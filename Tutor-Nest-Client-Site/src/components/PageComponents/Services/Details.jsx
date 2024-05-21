import { useLoaderData } from "react-router-dom";
import BookServices from "./BookServices";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function Details() {
  const service = useLoaderData();
  const [callBook, setCallBook] = useState(false);
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/boock`)
      .then((response) => {
        // const ids = response.data.map((doc) => doc._id);
        setBookIds(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book IDs:", error);
      });
  }, []);

  const handleBackBook = (data) => {
    setCallBook(data);
  };

  const foundBook = bookIds.includes(service._id);

  return (
    <div className="w-full -z-10 py-5 px-2">
      <Helmet>
        <title>Tutor Ease | Details </title>
      </Helmet>
      <div className="w-[1000px] flex flex-col relative justify-center items-center mx-auto">
        <img
          src={service.service_image}
          alt=""
          className="max-w-full max-h-[400px]"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-3">
          <div className="w-full flex flex-col justify-center col-span-1 sm:col-span-2 p-2">
            <h1 className="text-2xl font-bold mt-4">
              {" "}
              Service Name : {service.service_name}
            </h1>

            <p className="my-4">
              <b>Service description : </b>
              {service.description}
            </p>
            <hr />
            <h1 className="text-xl mt-1">
              <b>Service Type :</b> {service.service_type}
            </h1>
            <h1 className="text-xl mt-1">
              <b>Service Area :</b> {service.service_area}
            </h1>
            <hr />
            <p className="my-4">
              <b>Provider Speech : </b>
              {service.user.description}
            </p>
          </div>
          <div className="w-full customBorder h-full p-5">
            <div className="w-full flex justify-center items-center">
              <img
                src={service.user.user_image}
                alt=""
                className="max-w-full max-h-[200px] rounded-md shadow-md"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>{service.service_price}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{service.user.username}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{service.user.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-fullp-8">
          {foundBook ? (
            <button className="button w-[230px] border shadow-md">
              Bocked Item
            </button>
          ) : (
            <button
              onClick={() => setCallBook(!callBook)}
              className="button w-[230px] border shadow-md"
            >
              Book Now
            </button>
          )}
        </div>
        <div className="flex justify-center mx-auto items-center w-full absolute shadow-2xl max-w-[1000px] top-10 rounded-md bg-white overflow-scroll ">
          {callBook ? (
            <BookServices
              callBook={callBook}
              handleBackBook={handleBackBook}
              service={service}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
