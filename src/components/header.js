import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import planet from "../assets/planet2.png";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import "../styles/circle.css";
import "../styles/plane.css";
import PlaneLogo from "./planeLogo";
const Header = () => {
  const [hover, setHover] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handleLogo = () => {
    setIsHover(!isHover);
    console.log("hello");
  };

  const handleMouse = () => {
    setHover(!hover);
  };
  return (
    <div className=" flex mb-8 items-center justify-center h-calculated-height">
      <div className="flex items-center justify-between gap-8">
        <div className="">
          <PlaneLogo
            FontAwesomeIcon={FontAwesomeIcon}
            faShuttleSpace={faShuttleSpace}
            isHover={isHover}
            handleMouse={handleMouse}
          />
          <h2 className=" text-responsite-text-title text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-cyan-300 font-bold capitalize ">
            welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-200 ">
              globetech
            </span>
          </h2>
          <p className="my-8 max-w-md capitalize text-cyan-500">
            we are committed to deliver{" "}
            <span className=" text-yellow-300 capitalize">best IT service</span>
            . our consultants have experience in working with clients. we have
            extensive experience in the software application space and also
            offer a broad range and depth of technology
          </p>
          <div className="flex gap-2">
            <button className="btn bg-yellow-400  text-gray-800">
              support us
            </button>
            <button className="btn border-2 border-gray-200 ">
              our mission
            </button>
          </div>
        </div>

        {/* TODO: Image */}
        <div className="h-full min-w-md rounded-lg ">
          <div className="circle_container" onMouseOver={handleMouse}>
            <div className="circle outer-circle">
              <div
                className={`planet out-planet-1 ${
                  hover ? "out-planet1-open" : "out-planet1-close"
                }`}
              ></div>
              <div
                className={`planet out-planet-2 ${
                  hover ? "out-planet2-open" : "out-planet2-close"
                }`}
              ></div>
              <div className="circle circle1 inner-circle">
                <div
                  className={`planet inn-planet-1 ${
                    hover ? "inn-planet1-open" : "inn-planet1-close"
                  }`}
                ></div>
                <div
                  className={`planet inn-planet-2 ${
                    hover ? "inn-planet2-open" : "inn-planet2-close"
                  }`}
                ></div>
                <div className="circle circle2 deep-inner-circle">
                  <div
                    className={`planet deep-planet-1 ${
                      hover ? "deep-planet1-open" : "deep-planet1-close"
                    }`}
                  ></div>
                  <div
                    className={`planet inn-planet-2 ${
                      hover ? "inn-planet2-open" : "inn-planet2-close"
                    }`}
                  ></div>
                  <div className="circle circle3">
                    <div className="planet planet-1"></div>
                    <div className="planet planet-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
