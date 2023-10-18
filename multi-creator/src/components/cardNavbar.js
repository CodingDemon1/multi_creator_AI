import React from "react";
import { smallNavbar } from "../applications/dataObjects/navbarData";

function CardNavbar({ selectedItem, setSelectedItem }) {
  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="flex flex-row gap-4 w-full bg-[#f9fff3] justify-center mt-10 sticky top-[4rem] py-1">
      {smallNavbar.map((item) => {
        return (
          <div
            key={item.value}
            className={`border shadow-md p-3 rounded-lg cursor-pointer ${
              selectedItem === item ? "bg-[#4ca30d]" : "bg-white"
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default CardNavbar;
