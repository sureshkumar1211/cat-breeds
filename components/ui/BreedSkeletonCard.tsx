import React from "react";

const BreedSkeletonCard: React.FC = () => {
  return (
    <article className="p-5 rounded-md shadow-md flex flex-col gap-4 bg-white">
      <div className="bg-gray-400 h-52"></div>
      <div className="flex flex-col gap-2">
        <div className="text-base bg-gray-300 w-2/4 h-4 rounded-md"></div>
        <div className="text-sm bg-gray-200 w-full h-3 rounded-md"></div>
      </div>
    </article>
  );
};

export default BreedSkeletonCard;
