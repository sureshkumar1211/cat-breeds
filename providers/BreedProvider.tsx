"use client";
import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/apiConstants";
import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface BreedImage {
  url: string;
}

export interface IBreed {
  name: string;
  image: BreedImage;
  description: string;
}

export enum API_STATUS {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}

export interface BreedState {
  pageNumber: number;
  breeds: IBreed[];
  searchTerm: string;
  apiStatus: API_STATUS;
  totalBreedsCount: number;
}
export interface BreedActions {
  setPageNumber: Dispatch<SetStateAction<number>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export type BreedContextType = BreedState & BreedActions;

export const BreedContext = createContext<BreedContextType>({
  pageNumber: 0,
  breeds: [],
  searchTerm: "",
  totalBreedsCount: 0,
  apiStatus: API_STATUS.idle,
  setPageNumber: () => {},
  setSearchTerm: () => {},
});

export const BreedProvider: React.FC<any> = ({ children }) => {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [apiStatus, setApiStatus] = useState(API_STATUS.idle);
  const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
  const [totalBreedsCount, setTotalBreedsCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let apiEndpoint = `/api/cats/breeds?page=${pageNumber}&limit=${DEFAULT_PAGE_LIMIT}`;
    if (searchTerm) {
      apiEndpoint = `/api/cats/breeds/search?q=${searchTerm}&${pageNumber}&limit=${DEFAULT_PAGE_LIMIT}`;
    }
    setApiStatus(API_STATUS.loading);
    axios
      .get(apiEndpoint)
      .then((response) => {
        setBreeds(response.data?.data);
        setTotalBreedsCount(response.data?.totalCount);
        setApiStatus(API_STATUS.success);
      })
      .catch((error) => {
        setApiStatus(API_STATUS.error);
        console.error(error);
      });
  }, [pageNumber, searchTerm]);

  return (
    <BreedContext.Provider
      value={{
        breeds,
        apiStatus,
        searchTerm,
        totalBreedsCount,
        setPageNumber,
        setSearchTerm,
        pageNumber,
      }}
    >
      {children}
    </BreedContext.Provider>
  );
};
