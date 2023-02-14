import { useState, useReducer, useEffect, useContext } from "react";
import Icons from "../icons/Icons.jsx";
import PriceBar from "./PriceBar.jsx";
import { CardsContext } from "../../App.jsx";

export default function CardFilter({
  highestPrice,
  cardVariationNumbers,
  propsTaker,
}) {

  const { market, myCards } = useContext(CardsContext);


  // Filter Options
  const [filterOptions, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_RANGE":
          return {
            ...state,
            priceRange: action.payload,
          };
        case "SET_HIGHEST_PRICE":
          return {
            ...state,
            priceRange: [0, action.payload],
          };
        case "TOGGLE_CARD_TYPE":
          return {
            ...state,
            cardType: {
              ...state.cardType,
              [action.payload.type]: !state.cardType[action.payload.type],
            },
          };
        case "TOGGLE_POSITION":
          return {
            ...state,
            position: {
              ...state.position,
              [action.payload.type]: !state.position[action.payload.type],
            },
          };
        default:
          return state;
      }
    },
    {
      priceRange: [0, highestPrice],
      cardType: {
        bronze: true,
        silver: true,
        gold: true,
      },
      position: {
        goalkeeper: true,
        defender: true,
        midfielder: true,
        forward: true,
      },
    }
  );

  // Accordion state managment
  const [isOpen, setIsOpen] = useState({
    cardType: false,
    position: false,
    price: false,
  });

  // Setting the highest price of the cards.
  useEffect(() => {
    dispatch({ type: "SET_HIGHEST_PRICE", payload: highestPrice });
  }, [highestPrice]);

  useEffect(() => {
    propsTaker(filterOptions);
  }, [propsTaker, filterOptions, market, myCards ]);

  // priceRange handler
  const priceRangeHandler = (event) => {
    dispatch({ type: "SET_RANGE", payload: event });
  };

  return (
    <div className="p-6 bg-white rounded-lg w-[15%] h-fit">
      <ul className="flex flex-col leading-normal">
        <li
          className={`relative flex flex-col border-b border-sky-light ${
            isOpen.cardType && "pb-3"
          }`}
        >
          <button
            className="z-20 flex items-center justify-between w-full pb-4 bg-white"
            onClick={() =>
              setIsOpen((current) => {
                return {
                  ...current,
                  cardType: !current.cardType,
                };
              })
            }
          >
            Card Type
            <Icons
              className={`mt-px ${
                isOpen.cardType && "rotate-[540deg]"
              } animation`}
              iconName={"ArrowDown"}
            />
          </button>
          <div
            className={`${
              isOpen.cardType
                ? "!h-[72px] !opacity-100 pointer-events-auto"
                : "!h-0 pb-0 opacity-0 pointer-events-none"
            } z-0 animation`}
          >
            <ul className="leading-normal text-ink-light text-regular">
              <li>
                <button
                  className={`${
                    filterOptions.cardType.gold && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_CARD_TYPE",
                      payload: { type: "gold" },
                    })
                  }
                >
                  Gold ({cardVariationNumbers.Gold})
                </button>
              </li>
              <li>
                <button
                  className={`${
                    filterOptions.cardType.silver && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_CARD_TYPE",
                      payload: { type: "silver" },
                    })
                  }
                >
                  Silver ({cardVariationNumbers.Silver})
                </button>
              </li>
              <li>
                <button
                  className={`${
                    filterOptions.cardType.bronze && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_CARD_TYPE",
                      payload: { type: "bronze" },
                    })
                  }
                >
                  Bronze ({cardVariationNumbers.Bronze})
                </button>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={`relative border-b border-sky-light ${
            isOpen.position && "pb-3"
          } animation`}
        >
          <button
            className="z-20 flex items-center justify-between w-full py-4"
            onClick={() =>
              setIsOpen((current) => {
                return {
                  ...current,
                  position: !current.position,
                };
              })
            }
          >
            Position
            <Icons
              className={`mt-px ${
                isOpen.position && "rotate-[540deg]"
              } animation`}
              iconName={"ArrowDown"}
            />
          </button>
          <div
            className={`${
              isOpen.position ? "!h-[96px] !opacity-100 !pointer-events-auto" : "!h-0 !opacity-0 !pointer-events-none"
            } z-0 animation`}
          >
            <ul className="leading-normal text-ink-light text-regular">
              <li>
                <button
                  className={`${
                    filterOptions.position.goalkeeper && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_POSITION",
                      payload: { type: "goalkeeper" },
                    })
                  }
                >
                  Goalkeeper ({cardVariationNumbers.Goalkeeper})
                </button>
              </li>
              <li>
                <button
                  className={`${
                    filterOptions.position.defender && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_POSITION",
                      payload: { type: "defender" },
                    })
                  }
                >
                  Defender ({cardVariationNumbers.Defender})
                </button>
              </li>
              <li>
                <button
                  className={`${
                    filterOptions.position.midfielder && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_POSITION",
                      payload: { type: "midfielder" },
                    })
                  }
                >
                  Midfielder ({cardVariationNumbers.Midfielder})
                </button>
              </li>
              <li>
                <button
                  className={`${
                    filterOptions.position.forward && "font-bold text-red"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_POSITION",
                      payload: { type: "forward" },
                    })
                  }
                >
                  Forward ({cardVariationNumbers.Forward})
                </button>
              </li>
            </ul>
          </div>
        </li>
        <li className="pt-4">
          <button
            className="z-20 flex items-center justify-between w-full"
            onClick={() =>
              setIsOpen((current) => {
                return {
                  ...current,
                  price: !current.price,
                };
              })
            }
          >
            Price
            <Icons
              className={`mt-px ${isOpen.price && "rotate-[540deg]"} animation`}
              iconName={"ArrowDown"}
            />
          </button>
          <div
            className={`${
              isOpen.price ? "!h-[46px] !opacity-100 !pointer-events-auto pt-3" : "!h-0 !opacity-0 !pointer-events-none pt-0"
            } z-0 animation`}
          >
            <div className="flex justify-between mb-2 font-bold leading-normal text-tiny text-red">
              <span>€ {filterOptions.priceRange[0].toFixed(2)}</span>
              <span>€ {filterOptions.priceRange[1].toFixed(2)}</span>
            </div>
            <PriceBar
              rangeUpdateHandler={priceRangeHandler}
              rangeValue={filterOptions.priceRange}
              maxRange={highestPrice}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
