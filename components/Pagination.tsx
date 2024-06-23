"use client";
import React, { useContext } from "react";
import Button, { ButtonVariants } from "./ui/Button";
import { BreedContext } from "@/providers/BreedProvider";
import { DEFAULT_PAGE_LIMIT } from "@/constants/apiConstants";

enum PaginationButtonTypes {
  first = "first",
  prev = "prev",
  next = "next",
  last = "last",
}

const Pagination = () => {
  const { totalBreedsCount, pageNumber, setPageNumber } =
    useContext(BreedContext);
  const onClickHandler = (type: PaginationButtonTypes) => {
    switch (type) {
      case PaginationButtonTypes.first:
        setPageNumber(1);
        break;
      case PaginationButtonTypes.prev:
        setPageNumber((prevPageNumber) => prevPageNumber - 1);
        break;
      case PaginationButtonTypes.next:
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        break;
      case PaginationButtonTypes.last:
        setPageNumber(Math.floor(totalBreedsCount / DEFAULT_PAGE_LIMIT));
        break;
      default:
        break;
    }
  };
  const isButtonDisabled = (type: PaginationButtonTypes) => {
    switch (type) {
      case PaginationButtonTypes.first:
        return Boolean(pageNumber === 1);
      case PaginationButtonTypes.prev:
        return Boolean(pageNumber === 1);
      case PaginationButtonTypes.next:
        return Boolean(
          Math.floor(totalBreedsCount / DEFAULT_PAGE_LIMIT) === pageNumber
        );
      case PaginationButtonTypes.last:
        return Boolean(
          Math.floor(totalBreedsCount / DEFAULT_PAGE_LIMIT) === pageNumber
        );
      default:
        return false;
    }
  };

  return (
    <div className="flex flex-row gap-3">
      <Button
        onClickHandler={() => onClickHandler(PaginationButtonTypes.first)}
        variant={ButtonVariants.SECONDARY}
        disabled={isButtonDisabled(PaginationButtonTypes.first)}
      >
        First
      </Button>
      <Button
        onClickHandler={() => onClickHandler(PaginationButtonTypes.prev)}
        variant={ButtonVariants.SECONDARY}
        disabled={isButtonDisabled(PaginationButtonTypes.prev)}
      >
        Prev
      </Button>
      <Button
        onClickHandler={() => onClickHandler(PaginationButtonTypes.next)}
        variant={ButtonVariants.SECONDARY}
        disabled={isButtonDisabled(PaginationButtonTypes.next)}
      >
        Next
      </Button>
      <Button
        onClickHandler={() => onClickHandler(PaginationButtonTypes.last)}
        variant={ButtonVariants.SECONDARY}
        disabled={isButtonDisabled(PaginationButtonTypes.last)}
      >
        Last
      </Button>
    </div>
  );
};

export default Pagination;
