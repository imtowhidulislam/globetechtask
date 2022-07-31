import React, { useState } from "react";
import planet from "../assets/planet2.png";
import "./circle.css";

const Header = () => {
  const [hover, setHover] = useState(true);
  const handleMouse = () => {
    setHover(!hover);
  };
  return (
    <div className=" flex mt-8 mb-8 items-center justify-center h-calculated-height ">
      <div className="flex items-center justify-between gap-8">
        <div className="">
          <h2 className=" text-responsite-text-title text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-cyan-300 font-bold capitalize ">
            welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-200 ">
              globetech
            </span>
          </h2>
          <p className="my-8 max-w-md capitalize">
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

// {/* <img className="h-full object-cover w-full" src={planet} alt="" /> */}
/*    <div className="h-full min-w-md rounded-lg flex items-center justify-center px-32 bottom-2 border-cyan-500">

          <div className="border-2 relative border-cyan-300 p-16 rounded-full">
            <div className=" top-12 w-11  circle-width bg-orange-200"></div>
            <div className=" -bottom-3 left-1/2 w-5 circle-width bg-slate-200"></div>

            <div className="border-2 relative border-cyan-300 p-16 rounded-full">
              <div className="top-12 right-8 w-8 circle-width bg-pink-200"></div>
              <div className="bottom-8 w-5 circle-width bg-orange-500"></div>

              <div className="border-2 relative border-cyan-300 p-16 rounded-full">
                <div className="top-28 -left-4 w-8 circle-width bg-pink-400"></div>
                <div className="bottom-9 right-4 w-6 circle-width bg-green-500"></div>

                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 border-red-600 p-16 rounded-full">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div> */
