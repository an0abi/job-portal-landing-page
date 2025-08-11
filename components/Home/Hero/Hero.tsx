import React from "react";
import Image from "next/image";
import JobSearchBar from "./JobSearchBar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold">
            Join us & Explore <br />
            Thousands of Job
          </h1>
          <p className="mt-4 text-sm sm:text-lg font-medium">
            Find Jobs, Internships, and Freelance Opportunities
          </p>
          <JobSearchBar />
          <div className="text-base font-medium text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-4">
            <span>Popular Search: </span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
              UI/UX Designer, Frontend Developer, Product Manager
            </span>
          </div>
        </div>
        <div className="mx-auto hidden xl:block">
          <Image
            src="/images/hero-1.png"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
