import { CardsContext } from "../App.jsx";
import { useContext, useState, useEffect, useCallback, useRef } from "react";
// import BaseButton from "./shared/BaseButton";
import CardFilter from "./filter/CardFilter.jsx";
import PlayerCard from "./shared/PlayerCard.jsx";
import BaseModal from "./modals/BaseModal.jsx";
import CardsSwiper from "./CardsSwiper.jsx";

export default function Market() {
  const { market } = useContext(CardsContext);
  const [maxPrice, setMaxPrice] = useState(0);
  const [cardVariationNumbers, setCardVariationNumbers] = useState({
    Bronze: 0,
    Silver: 0,
    Gold: 0,
    Goalkeeper: 0,
    Defender: 0,
    Midfielder: 0,
    Forward: 0,
  });
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    setMaxPrice(
      market.reduce((current, card) => {
        if (current < card.price) {
          current = card.price;
        }
        return current;
      }, 0)
    );
    market.forEach((card) => {
      setCardVariationNumbers((prev) => ({
        ...prev,
        [card.cardType]: prev[card.cardType] + 1,
        [card.position]: prev[card.position] + 1,
      }));
    });
  }, [market]);

  // Modal Handler
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const propsTaker = useCallback(
    (filterOptions) => {
      setCardList(
        market
          .filter(
            (card) =>
              filterOptions.cardType[card.cardType.toLowerCase()] &&
              filterOptions.position[card.position.toLowerCase()] &&
              card.price <= filterOptions.priceRange[1] &&
              card.price >= filterOptions.priceRange[0]
          )
          .map((card, index) => (
            <PlayerCard
              player={card}
              playerRenderer={(player) => {
                setCurrentPlayer(player);
              }}
              modalToggler={() => setModalOpen(true)}
              key={index}
            />
          ))
      );
    },
    [market]
  );

  const splittedCards = [];
  for (let i = 0; i < cardList.length; i += 10) {
    splittedCards.push(cardList.slice(i, i + 10));
  }

  return (
    <div id="market" className="p-6 rounded-lg bg-sky-lighter">
      <h1 className="mb-6 font-bold leading-relaxed text-ink-darkest text-large">
        MARKET
      </h1>
      <div className="flex w-full gap-6">
        <CardFilter
          propsTaker={propsTaker}
          cardVariationNumbers={cardVariationNumbers}
          highestPrice={maxPrice}
        />

        <CardsSwiper cards={splittedCards} />
      </div>
      <BaseModal
        modalOpen={modalOpen}
        modalToggler={() => setModalOpen(false)}
        player={currentPlayer}
      />
    </div>
  );
}
