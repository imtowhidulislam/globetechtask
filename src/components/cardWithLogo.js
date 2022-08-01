import React, { useState } from "react";
// import image1 from "../assets/image1.svg";
import Cards from "./cards";

const CardsWithLogo = ({ title, des, img }) => {
  return (
    <>
      <Cards title={title} des={des} img={img} />
    </>
  );
};

export default CardsWithLogo;
