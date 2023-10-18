import React, { useState, useEffect } from "react";

function Cards({ item }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(`../public/images/${item.img}`)
      .then((image) => {
        setImgSrc(image.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [item.img]);
  return (
    <div className="w-[27rem] h-[14rem] flex flex-col gap-2 shadow-md hover:shadow-lg rounded-lg border p-3 transition-all group hover:border-[#4ca30d]">
      <div className="flex flex-row justify-between items-center">
        <img src={imgSrc} alt="insta" className="w-10 h-10" />
        <div className="border px-3 text-sm bg-[#d0f8ab] rounded-xl text-[#4ca30d]">
          {item.availableFor}
        </div>
      </div>
      <div className="flex items-start font-semibold text-lg text-gray-800">
        {item.title}
      </div>
      <div className="flex text-start text-gray-600">{item.description}</div>
      <div className="border cursor-pointer border-[#4ca30d] mt-2 transition-all group-hover:bg-[#4ca30d] group-hover:text-white p-3 rounded-lg">
        Launch Free App
      </div>
    </div>
  );
}

export default Cards;
