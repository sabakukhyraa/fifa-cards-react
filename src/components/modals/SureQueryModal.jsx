import ModalButton from "../shared/ModalButton.jsx";
import { CardsContext } from "../../App.jsx";
import { useContext, useState } from "react";
import AlertModal from "./AlertModal.jsx";

export default function SureQueryModal({
  modalToggler,
  sureQueryOpen,
  close,
  player,
  doHave,
}) {
  const { budget, setMarket, setMyCards, setBudget } = useContext(CardsContext);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertHandler = () => {
    setIsAlertOpen((prev) => !prev);
    close();
  };

  const transactionHandler = () => {
    if (doHave === "Buy") {
      if (budget >= player.price) {
        setMarket((prev) => prev.filter((card) => card.id !== player.id));
        setMyCards((prev) => [...prev, player]);
        setBudget((prev) => prev - player.price);
      } else {
        setIsAlertOpen((prev) => !prev);
      }
    } else {
      setMyCards((prev) => prev.filter((card) => card.id !== player.id));
      setMarket((prev) => [...prev, player]);
      setBudget((prev) => prev + player.price);
    }
    if (budget >= player.price) {
      close();
    }
    if (modalToggler && budget >= player.price) {
      modalToggler();
    }
  };

  return (
    <div
      className={`back-shadow !items-center ${
        sureQueryOpen ? "!fixed" : "!hidden"
      }`}
    >
      <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg">
        <div className="flex flex-col items-center justify-center font-bold text-title3">
          <p>Would you like to {doHave?.toLowerCase()} the card for</p>
          <span className="font-bold text-red">
            € {player.price?.toFixed(2)}
          </span>
        </div>
        <div className="w-full">
          <ModalButton
            onClick={transactionHandler}
            className={"!w-full"}
            content={doHave}
            type={"red"}
          />
          <ModalButton
            onClick={close}
            className={"!w-full"}
            content={"Cancel"}
            type={"white"}
          />
        </div>
      </div>
      <AlertModal isAlertOpen={isAlertOpen} alertHandler={alertHandler} />
    </div>
  );
}
