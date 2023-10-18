import { useEffect, useState } from "react";
import "./App.css";
import CardNavbar from "./components/cardNavbar";
import NavBar from "./components/navbar";
import PageContent from "./components/pageContent";
import { smallNavbar } from "./applications/dataObjects/navbarData";
import Cards from "./components/cards";
import { cards } from "./applications/dataObjects/cardsData";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(smallNavbar[0]);
  const [cardData, setCardData] = useState(cards);

  useEffect(() => {
    const filteredCards = cards.filter((item) =>
      item.type.includes(selectedItem.value)
    );
    console.log(filteredCards);
    if (filteredCards.length > 0) {
      setCardData(filteredCards);
    } else {
      setCardData(cards);
    }
  }, [selectedItem]);
  return (
    <div className="App bg-[#f9fff3]">
      <NavBar />
      <PageContent />
      <CardNavbar
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
      <div className=" mt-12 grid grid-cols-3 grid-rows-15 gap-4 px-[15rem]">
        {cardData &&
          cardData.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

export default App;
