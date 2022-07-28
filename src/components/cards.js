import React from "react";
// import image1 from "../assets/image1.svg";

const Cards = ({ title, des, img }) => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div>
        <div className="w-72 p-8 bg-white rounded-lg drop-shadow-2xl">
          <div className="block w-full ">
            <img src={img} alt="" className="h-full w-full object-cover" />
          </div>
          <h2 className="text-center my-4 text-xl text-sky-500 font-bold">
            {title}
          </h2>
          <p className="leading-5">{des}</p>
          <div className="flex items-center justify-center mt-4 rounded-3xl">
            <button className="btn bg-sky-500 text-gray-200">more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
