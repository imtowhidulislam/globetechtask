import React, { useState } from "react";
// import image1 from "../assets/image1.svg";
import Cards from "./cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import "../styles/plane.css";

const CardsWithLogo = ({ title, des, img }) => {
  const [isHover, setIsHover] = useState(false);

  const handleLogo = () => {
    setIsHover(!isHover);
  };
  return (
    <div>
      <div className="main_plane_wrapper">
        <div
          className={`plane_container flex items-center justify-start gap-2 ${
            isHover ? "plane_container-open" : "plane_container-close"
          }`}
        >
          <div className="plane_bars">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-transparent " onMouseEnter={handleLogo}>
            <FontAwesomeIcon
              className="text-5xl text-gray-400 cursor-pointer"
              icon={faShuttleSpace}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {/* <Cards /> */}
    </div>
  );
};

export default CardsWithLogo;
