import { createContext, useEffect, useState } from "react";
import MyCards from "./components/MyCards.jsx";
import Market from "./components/Market.jsx";
import TheHeader from "./components/TheHeader.jsx";
// import TheSlider from "./components/TheSlider.jsx";
// import { get } from "./services/request";
import { fifaMarket, fifaMyCards } from "./services/fifaCards.js";

export const CardsContext = createContext({
  market: [],
  myCards: [],
  budget: 100,
});

export default function App() {
  const [budget, setBudget] = useState(100);

  // Scroll Handler
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const section = document.querySelector("#market");

      const sectionTop = section.offsetTop - window.innerHeight / 2;
      const sectionBottom = sectionTop + section.offsetHeight;

      // const sectionTop = 1332 - window.innerHeight / 2;
      // const sectionBottom = sectionTop + 2387;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const clickHandle = () => {
  //   setScroll((prev) => !prev)
  // }
  const [market, setMarket] = useState(fifaMarket);
  const [myCards, setMyCards] = useState(fifaMyCards);

  // const API_URL = "http://challenge.vole.io/cards";

  // useEffect(() => {
  //   get(`${API_URL}/market`).then((res) => {
  //     setMarket(res);
  //     console.log("market api'den çekildi!", res);
  //   });
  //   get(`${API_URL}/mycards`).then((res) => {
  //     setMyCards(res);
  //     console.log("myCards api'den çekildi!", res);
  //   });
  // }, []);

  return (
    <div>
      <CardsContext.Provider
        value={{ market, myCards, budget, setMarket, setMyCards, setBudget }}
      >
        <TheHeader whereScroll={scroll} />
        <div className="mt-[120px]">
          <div className="flex flex-col px-10 bg-white gap-28 py-28">
            <MyCards />
            <Market />
          </div>
        </div>
      </CardsContext.Provider>
    </div>
  );
}
