"use client";
import { API_STATUS, BreedContext } from "@/providers/BreedProvider";
import React, { useContext } from "react";
import BreedCard from "./ui/BreedCard";
import BreedSkeletonCard from "./ui/BreedSkeletonCard";

const BreedList = () => {
  const { breeds, apiStatus, searchTerm } = useContext(BreedContext);
  const renderBreeds = () => {
    // if (!breeds?.length && apiStatus === API_STATUS.success) {
    //   return <p className="text-center w-full">No breeds found!</p>;
    // }
    return breeds?.map((breed) => {
      return (
        <BreedCard
          key={breed.name}
          name={breed.name}
          desc={breed.description}
          imageUrl={breed?.image?.url}
        />
      );
    });
  };

  const renderSkeletonCards = () => {
    const skeletonCards = new Array(3).fill(null);
    return skeletonCards.map((_, index) => {
      return <BreedSkeletonCard key={"Skeleton-" + index} />;
    });
  };
  return (
    <div className="flex flex-col gap-4 w-full text-center">
      {searchTerm && <p>Search results for {`'${searchTerm}'`}</p>}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 w-full">
        {apiStatus === API_STATUS.loading
          ? renderSkeletonCards()
          : renderBreeds()}
      </div>
    </div>
  );
};

export default BreedList;
