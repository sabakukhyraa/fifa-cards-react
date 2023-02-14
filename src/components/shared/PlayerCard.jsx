import { useContext, useState } from "react";
import BaseButton from "./BaseButton.jsx";
import { CardsContext } from "../../App.jsx";
import SureQueryModal from "../modals/SureQueryModal.jsx";

export default function PlayerCard({ player, playerRenderer, modalToggler }) {

  const { market } = useContext(CardsContext)
  const [sureQueryOpen, setSureQueryOpen] = useState(false);
  const doHave = market.includes(player) ? "Buy" : "Sell";

  const modalClick = () => {
    modalToggler()
    playerRenderer(player)
  }

  return (
    <div className="bg-white rounded-lg w-[200px] hover:shadow-large animation h-fit">
      <button onClick={modalClick}>
        <img src={player.photoUrl} alt={player.name} />
      </button>
      <div className="flex items-center justify-between p-4 !pt-2">
        <span className="font-bold leading-normal text-regular">
          € {player.price?.toFixed(2)}
        </span>
        <BaseButton onClick={() => setSureQueryOpen(prev => !prev)} content={market.includes(player) ? "Buy" : "Sell"} />
      </div>
      <SureQueryModal sureQueryOpen={sureQueryOpen} player={player} doHave={doHave} close={() => setSureQueryOpen(false)}/>
    </div>
  );
}
