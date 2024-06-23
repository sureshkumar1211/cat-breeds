import BreedList from "@/components/BreedList";
import Pagination from "@/components/Pagination";
import SearchBreeds from "@/components/SearchBreeds";

export default function Home() {
  return (
    <section className="flex px-8 md:px-0 w-full md:w-3/4 mx-auto flex-col gap-4 justify-center items-center py-10">
      <h1 className="text-xl capitalize md:text-4xl font-bold leading-relaxed">
        Browse cat breeds
      </h1>
      <SearchBreeds />
      <div className="flex flex-col py-5 md:py-10 gap-5 justify-center items-center w-full">
        <BreedList />
        <Pagination />
      </div>
    </section>
  );
}
