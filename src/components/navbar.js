import React from "react";
import Globetech2 from "../assets/Globetech2.svg";
const Navbar = () => {
  return (
    <div className="">
      <nav className="flex-center py-12">
        <img
          className="w-32 cursor-pointer"
          src={Globetech2}
          alt="glob1etech-img"
        />
        <ul className="flex-center gap-4 text-gray-200">
          <li>
            <a className="capitalize" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="capitalize" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="capitalize" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
