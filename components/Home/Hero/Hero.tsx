import React from "react";
import JobSearchBar from "./JobSearchBar";

const Hero = () => {
  return (
  <div className="relative w-full h-screen flex justify-center flex-col">
    <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
            <h1 className="text-3xl sm:text-6xl font-bold">Join us & Explore <br />Thousands of Job</h1>
            <p className="mt-4 text-sm sm:text-lg font-medium">Find Jobs, Internships, and Freelance Opportunities</p>
            <JobSearchBar />
        </div>
        <div></div>
    </div>
  </div>
  );
};

export default Hero;
