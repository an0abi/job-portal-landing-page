import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import {
  GiHumanPyramid,
  GiMaterialsScience,
  GiTakeMyMoney,
} from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { MdOutlineHandyman } from "react-icons/md";
import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    id: 1,
    categoryName: "Web Development",
    openPositions: 120,
    icon: <FaLaptopCode className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />,
  },
  {
    id: 2,
    categoryName: "Accounting & Finance",
    openPositions: 80,
    icon: <GiTakeMyMoney className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />,
  },
  {
    id: 3,
    categoryName: "Marketing",
    openPositions: 60,
    icon: (
      <IoMegaphoneOutline className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />
    ),
  },
  {
    id: 4,
    categoryName: "Design & Creative",
    openPositions: 90,
    icon: <LuPaintbrush className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />,
  },
  {
    id: 5,
    categoryName: "Data Science",
    openPositions: 70,
    icon: (
      <GiMaterialsScience className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />
    ),
  },
  {
    id: 6,
    categoryName: "Customer Support",
    openPositions: 50,
    icon: (
      <MdOutlineHandyman className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />
    ),
  },
  {
    id: 7,
    categoryName: "Sales",
    openPositions: 40,
    icon: (
      <FaArrowUpRightDots className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />
    ),
  },
  {
    id: 8,
    categoryName: "Human Resources",
    openPositions: 30,
    icon: (
      <GiHumanPyramid className="w-10 h-10 text-cyan-500 dark:text-cyan-300" />
    ),
  },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        title="Popular Job Categories"
        subtitle="Find the right job for you"
      />
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryData.map((category) => {
          return (
            <div key={category.id}>
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
