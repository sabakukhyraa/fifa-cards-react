import { useState } from "react";
import Icons from "./icons/Icons.jsx";

export default function CardsSwiper({ cards }) {
  const sliderCards = cards.map((slide, index) => (
    <div className="flex flex-wrap w-full gap-6" key={index}>
      {slide}
    </div>
  ));

  const [paginationIndex, setPaginationIndex] = useState(0);

  const pagination = Array.from({ length: cards.length }, () => 0).map(
    (_, index) => (
      <button
        key={index}
        onClick={() => setPaginationIndex(index)}
        className={`w-8 h-8 text-white rounded-full bg-sky-base text-large ${
          paginationIndex === index && "!bg-red !font-bold"
        }`}
      >
        {index + 1}
      </button>
    )
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 pb-6">
      {sliderCards[paginationIndex]}
      {cards.length > 1 && (
        <div className="flex justify-center w-full gap-2">
          <button onClick={() => setPaginationIndex((prev) => prev - 1)}>
            <Icons
              className={`rotate-180 ${paginationIndex === 0 && "hidden"}`}
              iconName={"ArrowRight"}
            />
          </button>
          {pagination}
          <button onClick={() => setPaginationIndex((prev) => prev + 1)}>
            <Icons
              className={`${
                paginationIndex === sliderCards.length - 1 && "hidden"
              }`}
              iconName={"ArrowRight"}
            />
          </button>
        </div>
      )}
    </div>
  );
}
