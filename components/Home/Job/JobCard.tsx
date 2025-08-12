import React from "react";
import { BsBookmark } from "react-icons/bs";
import Image from "next/image";
import { BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

type JobCardProps = {
  job: {
    id: number;
    image: string;
    title: string;
    location: string;
    jobType: string;
    urgency: string;
  };
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="border-[1.5px] border-gray-300 dark:border-gray-700 p-6 rounded-lg relative">
      <div className="w-8 h-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center transition-all duration-200 justify-center rounded-full flex-col absolute top-4 right-4">
        <BsBookmark className="w-4 h-4 text-gray-700 hover:text-cyan-500 dark:text-gray-300 hover:dark:text-cyan-500" />
      </div>
      <div className="flex items-center space-x-4">
        <Image src={job.image} alt={job.title} width={50} height={50} />
        <div>
          <h2 className="text-base font-medium">{job.title}</h2>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 mt-2 text-gray-500 dark:text-gray-400">
              <BiBriefcase className="w-5 h-5" />
              <p className="text-gray-500 text-sm">Segment</p>
            </div>
            <div className="flex items-center space-x-1 mt-2 text-gray-500 dark:text-gray-400">
              <GrLocation className="w-5 h-5" />
              <p className="text-gray-500 text-sm">{job.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-3">
        <div className="px-4 py-1 bg-blue-600/30 rounded-full text-xs text-blue-700 dark:text-blue-300">
          {job.jobType}
        </div>
        <div
          className={`px-4 py-1 rounded-full text-xs ${
            job.urgency === "Urgent"
              ? "bg-red-600/30 dark:bg-red-300/30 text-red-700 dark:text-red-300"
              : "bg-green-600/30 text-green-700 dark:text-green-300"
          }`}
        >
          {job.urgency}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
