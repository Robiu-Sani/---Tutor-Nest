import axios from "axios";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SearchBox({ handleSearchBox, searchCall }) {
  const [searchValue, setSearchValue] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/search`)
      .then((result) => {
        setSearchValue(result.data);
        setOriginalData(result.data); // Store original data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Convert search term to lowercase
    if (searchTerm === "") {
      setSearchValue(originalData); // Restore original data when search term is empty
    } else {
      const searchResult = originalData.filter(
        (service) => service.service_name.toLowerCase().includes(searchTerm) // Convert service name to lowercase for comparison
      );
      setSearchValue(searchResult);
    }
  };

  return (
    <div className="custom_design sm:w-[500px] w-[96%] h-[550px] overflow-hidden bg-white border rounded-md shadow-md">
      <div className="w-full p-2 flex bg-gray-200 justify-between items-center">
        <small>Search Box</small>
        <RxCross2
          className="cursor-pointer"
          onClick={() => handleSearchBox(!searchCall)}
        />
      </div>
      <div className="w-full p-4">
        <input
          onChange={handleSearch}
          type="search"
          placeholder="Search Services"
          className="input bg-gray-100 shadow-md w-full border"
        />
      </div>
      <div className="w-full h-[calc(100%-100px)] pb-20 overflow-scroll">
        {searchValue.map((service) => (
          <Link
            key={service._id}
            to={`../details/${service._id}`}
            onClick={() => handleSearchBox(!searchCall)}
          >
            <button className="min-w-full text-left pl-5 p-2 border-b hover:bg-gray-200 hover:shadow-md">
              {service.service_name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
