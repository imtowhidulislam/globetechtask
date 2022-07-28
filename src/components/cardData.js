import React from "react";
import Cards from "./cards";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";

const CardData = () => {
  return (
    <div>
      <Cards
        title="Graphic design"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image1}
      />
      <Cards
        title="Front-end Development"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image2}
      />
      <Cards
        title="Back-end development"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image3}
      />
      <Cards
        title="Fullstack development"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image4}
      />
      <Cards
        title="Frontend Mentor"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image5}
      />
      <Cards
        title="web desing"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
        img={image6}
      />
    </div>
  );
};

export default CardData;
