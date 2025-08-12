"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

type CategoryCardProps = {
  category: {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: React.ReactNode;
  };
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Tilt scale={1.05} transitionSpeed={500}>
      <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center mb-4">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center mb-2">
          {category.categoryName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          {category.openPositions} Open Positions
        </p>
      </div>
    </Tilt>
  );
};

export default CategoryCard;
