import React from "react";
// import image1 from "../assets/image1.svg";
import CardsWithLogo from "./cardWithLogo";

const Cards = ({ title, des, img }) => {
  return (
    <div>
      <div className="w-80 p-2 py-8 bg-white rounded-xl drop-shadow-2xl">
        <div className="block w-full h-52">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
        <h2 className="text-center capitalize my-4 text-lg text-sky-500 font-bold">
          {title}
        </h2>
        <p className="leading-6 text-sm px-6">{des}</p>
        <div className="flex items-center justify-center mt-4 ">
          <button className="btn bg-sky-500 text-gray-200">more</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
