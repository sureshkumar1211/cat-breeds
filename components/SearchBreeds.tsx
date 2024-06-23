"use client";
import React, { SyntheticEvent, useContext, useState } from "react";
import SearchIcon from "./ui/SearchIcon";
import { BreedContext } from "@/providers/BreedProvider";

const SearchBreeds = () => {
  const { setSearchTerm: setBreedSearchTerm, setPageNumber } =
    useContext(BreedContext);
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const onClickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setPageNumber(1);
    setBreedSearchTerm(searchTerm);
  };
  return (
    <form className="w-full py-3 md:py-5">
      <div className="flex relative items-center mx-auto w-full md:w-2/3 text-sm">
        <input
          className="absolute pl-5 w-full p-3 focus-visible:outline-[#5916FF]  rounded-lg border-2 border-gray-400"
          type="text"
          name="search"
          id="search"
          onChange={onChangeHandler}
          placeholder="Search here...."
        />
        <button
          onClick={onClickHandler}
          className="absolute right-3 w-9 h-9 cursor-pointer text-white flex items-center justify-center bg-[#5916FF] rounded-md"
        >
          <i aria-label="Search Breeds" className="w-5 h-5 text-white">
            <SearchIcon />
          </i>
        </button>
      </div>
    </form>
  );
};

export default SearchBreeds;
