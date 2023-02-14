import { useContext, useEffect, useState } from "react";
import Icons from "../icons/Icons.jsx";
import { CardsContext } from "../../App.jsx";
import ModalButton from "../shared/ModalButton.jsx";
import { capitalizer } from "../../services/capitalizer";
import SureQueryModal from "./SureQueryModal.jsx";

export default function BaseModal({ modalOpen, modalToggler, player }) {
  const { market } = useContext(CardsContext);

  // Buying & Selling handling
  const [sureQueryOpen, setSureQueryOpen] = useState(false);
  const doHave = market.includes(player) ? "Buy" : "Sell";

  return (
    <div className={`back-shadow ${modalOpen ? "!fixed" : "!hidden"}`}>
      <div className="bg-white w-[66%] relative rounded-lg">
        <button className="absolute top-6 right-6" onClick={modalToggler}>
          <Icons iconName={"Cross"} />
        </button>
        <div>
          <div className="flex items-center justify-center bg-modal">
            <img
              className="w-[200px] player-card-shadow py-10"
              src={player.photoUrl}
              alt={player.name}
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center justify-center w-full gap-6">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="font-bold text-title3 text-red">
                    {player.name}
                  </h1>
                  <h2 className="leading-normal text-large">
                    {player.position}
                  </h2>
                </div>
                <div className="flex items-center justify-between w-1/2 p-6 rounded-lg bg-sky-lighter">
                  <span className="w-1/2 font-bold text-title3">
                    € {player.price?.toFixed(2)}
                  </span>
                  <ModalButton
                    onClick={() => setSureQueryOpen(prev => !prev)}
                    className={"!w-1/2"}
                    content={doHave}
                    type={"red"}
                  />
                </div>
              </div>
              <div className="w-full p-6 rounded-lg bg-sky-lighter">
                <h1 className="pb-4 font-bold text-large">ATTRIBUTES</h1>

                <AttributeBoxes player={player} />
              </div>
              <div className="flex justify-between w-full gap-6">
                <div className="w-full px-6 py-5 rounded-lg bg-sky-lighter">
                  <h2 className="text-large">Team</h2>
                  <h1 className="font-bold text-title3">{player.team}</h1>
                </div>
                <div className="w-full px-6 py-5 rounded-lg bg-sky-lighter">
                  <h2 className="text-large">Card Type</h2>
                  <h1 className="font-bold text-title3">{player.cardType}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SureQueryModal sureQueryOpen={sureQueryOpen} player={player} doHave={doHave} modalToggler={modalToggler} close={() => setSureQueryOpen(false)}/>
    </div>
  );
}

function AttributeBoxes({ player }) {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (player.attributes) {
      setAttributes(Object.entries(player.attributes));
    }
  }, [player]);



  const attributeInfos = attributes.map(([attribute, value], index) => (
    <div className="w-full p-4 bg-white rounded-lg" key={index}>
      <h2 className="text-large">{capitalizer(attribute)}</h2>
      <div>
        <span className="font-bold text-title3">{value}</span>
        <span className="text-sky-dark">/100</span>
      </div>
    </div>
  ));

  return <div className="flex justify-between gap-5">{attributeInfos}</div>;
}
