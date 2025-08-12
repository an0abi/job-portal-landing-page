import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    image: "/images/j1.png",
    title: "Software Engineer",
    location: "New York, NY",
    jobType: "Full-time",
    urgency: "Private",
  },
  {
    id: 2,
    image: "/images/j2.png",
    title: "Recruiting Coordinator",
    location: "San Francisco, CA",
    jobType: "Part-time",
    urgency: "Urgent",
  },
  {
    id: 3,
    image: "/images/j3.png",
    title: "Product Manager, Studio",
    location: "Austin, TX",
    jobType: "Contract",
    urgency: "Urgent",
  },
  {
    id: 4,
    image: "/images/j4.png",
    title: "Senior Product Designer",
    location: "Los Angeles, CA",
    jobType: "Internship",
    urgency: "Urgent",
  },
  {
    id: 5,
    image: "/images/j5.png",
    title: "Technical Architect",
    location: "Seattle, WA",
    jobType: "Full-time",
    urgency: "Private",
  },
  {
    id: 6,
    image: "/images/j6.png",
    title: "Product Manager, Risk",
    location: "Boston, MA",
    jobType: "Full-time",
    urgency: "Urgent",
  },
  {
    id: 7,
    image: "/images/j7.png",
    title: "Web Developer",
    location: "Chicago, IL",
    jobType: "Contract",
    urgency: "Private",
  },
  {
    id: 8,
    image: "/images/j8.png",
    title: "Senior Product Designer",
    location: "Miami, FL",
    jobType: "Full-time",
    urgency: "Private",
  },
  {
    id: 9,
    image: "/images/j9.png",
    title: "Senior BI Analyst",
    location: "Austin, TX",
    jobType: "Part-time",
    urgency: "Urgent",
  },
];

const Job = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading title="Job Listings" subtitle="Find your dream job" />
      <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {jobs.map((job) => {
          return (
            <div key={job.id}>
              <JobCard job={job} />
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <button className="px-10 py-3 bg-cyan-700 text-white cursor-pointer rounded-lg hover:bg-cyan-600 transition-all duration-200">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Job;
