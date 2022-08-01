import React from "react";
import { Outlet, Link } from "react-router-dom";
import Globetech2 from "../assets/Globetech2.svg";
const Navbar = () => {
  return (
    <div>
      <nav className="flex-center py-12 bg-blue-900 area_definer">
        <img
          className="w-32 cursor-pointer"
          src={Globetech2}
          alt="glob1etech-img"
        />
        <ul className="flex-center gap-4 text-gray-200">
          <li className="capitalize">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/carddata">Services</Link>
          </li>
          <li>
            <Link to="/cardWithLogoData">AllServices</Link>
          </li>
          <li>
            <Link to="/form">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
