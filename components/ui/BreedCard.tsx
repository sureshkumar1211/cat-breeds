import React from "react";

interface BreedCardProps {
  name: string;
  desc: string;
  imageUrl: string;
}

const BreedCard: React.FC<BreedCardProps> = ({ name, desc, imageUrl }) => {
  return (
    <article className="p-3 gap-2 md:p-5 rounded-md shadow-md flex flex-col md:gap-4 bg-white">
      <img className="object-cover w-full" src={imageUrl} alt={name} />
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-base font-semibold">{name}</h2>
        <p className="text-xs md:text-sm text-gray-400">{desc}</p>
      </div>
    </article>
  );
};

export default BreedCard;
