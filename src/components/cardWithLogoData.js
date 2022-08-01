import React, { useEffect, useRef, useState } from "react";
import Cards from "./cardWithLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import image8 from "../assets/image8.svg";

import "../styles/plane.css";

const Cardwithlogodata = () => {
  const [isHover, setIsHover] = useState(false);
  const cardsRef = useRef(null);
  const [arr, setArr] = useState([]);

  /* const handleLogo = () => {
    setIsHover(!isHover);
  }; */

  useEffect(() => {
    const [...card] = cardsRef.current.children;
    console.log(card);
    setArr([...card]);
  }, []);

  const handleMouse = () => {
    setIsHover(!isHover);
  };
  return (
    <div className="bg-blue-900 py-16">
      <div className="main_plane_wrapper1 mb-20">
        <div
          className={`plane_container flex items-center justify-start gap-2 ${
            isHover ? "plane_container-close" : "plane_container-open"
          }`}
        >
          <div className="plane_bars">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-transparent">
            <FontAwesomeIcon
              className="text-5xl text-gray-400 cursor-pointer"
              icon={faShuttleSpace}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h3 className="text-gray-200 text-center uppercase text-2xl font-bold">
          services
        </h3>
        <h1 className="text-gray-200 text-center capitalize text-3xl font-bold">
          we provides services to our clients
        </h1>
      </div>
      <div
        onMouseOver={handleMouse}
        ref={cardsRef}
        className=" area_definer grid grid-cols-grid-cards gap-16 place-items-center"
      >
        <Cards
          title="software solution"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image1}
        />
        <Cards
          title="e-commerce solution"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image8}
        />
        <Cards
          title="ERP solution"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image3}
        />
        <Cards
          title="Bulk SMS service"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image4}
        />
        <Cards
          title="graphic design"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image7}
        />
        <Cards
          title="digital marketing"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae consequuntur, aliquid at recusandae, adipisci sed animi consequatur, aut quae delectus. Quibusdam eos rem, debitis ratione"
          img={image6}
        />
      </div>
    </div>
  );
};

export default Cardwithlogodata;
