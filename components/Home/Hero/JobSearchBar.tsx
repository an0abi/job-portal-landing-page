import React from "react";
import { FaMap } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const JobSearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 ml-0">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <div
          className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-900 px-4
        sm:py-6 py-3 w-full md:w-1/2"
        >
          <MdSearch className="text-cyan-700 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full outline-none dark:bg-gray-700"
          />
        </div>
        <div className="flex items-center border-b md:border-b-0 border-gray-200 dark:border-gray-700 px-4 sm:py-6 py-3 w-full md:w-1/2">
          <FaMap className="text-cyan-700 text-xl mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none dark:bg-gray-700"
          />
        </div>
        <button className="bg-cyan-700 dark:bg-cyan-800 text-white px-8 sm:py-6 py-3 cursor-pointer text-sm md:text-base w-full md:w-auto min-w-[140px] whitespace-nowrap hover:bg-cyan-800 dark:hover:bg-cyan-900 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearchBar;
