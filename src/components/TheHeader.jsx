import { useContext } from "react";
import { CardsContext } from "../App.jsx";
import Icons from "./icons/Icons";
import White from "../assets/logo/White.png";

export default function TheHeader({ whereScroll }) {
  const { budget } = useContext(CardsContext);

  const smoothScrollToMarket = () => {
    const market = document.querySelector("#market");
    window.scrollTo({
      top: market.offsetTop -140,
      behavior: "smooth",
    });
  };
  const smoothScrollToMyCards = () => {
    const market = document.querySelector("#my-cards");
    window.scrollTo({
      top: market.offsetTop -140,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 z-[300] flex justify-between w-full px-16 py-9 bg-ink-darkest">
      <div className="flex items-center gap-24">
        <img className="h-12" src={White} alt="white logo" />
        <nav className="flex flex-col">
          <ul className="flex gap-16 font-semibold leading-none text-white text-large">
            <li>
              <button onClick={smoothScrollToMyCards}>MY CARDS</button>
            </li>
            <li><button onClick={smoothScrollToMarket}>MARKET</button></li>
          </ul>
          <div className="w-full py-1 pl-[1rem] pr-[9px]">
            <div
              className={`h-[4px] w-12 bg-red translate-x-[5px] animation ${
                whereScroll && "!translate-x-[154px]"
              }`}
            ></div>
          </div>
        </nav>
      </div>
      <div className="flex items-center rounded-lg bg-ink-dark">
        <div className="flex items-center h-full p-3 rounded-l-lg bg-red">
          <Icons iconName={"Wallet"} />
        </div>
        <div className="px-5 font-bold text-white text-title3">
          € {budget.toFixed(2)}
        </div>
      </div>
    </header>
  );
}
