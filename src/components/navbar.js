import React from "react";
import { Outlet, Link } from "react-router-dom";
import Globetech2 from "../assets/Globetech2.svg";
const Navbar = () => {
  return (
    <div className="bg-blue-900">
      <nav className="flex-center py-12  area_definer">
        <img
          className="w-32 cursor-pointer"
          src={Globetech2}
          alt="glob1etech-img"
        />
        <ul className="flex-center gap-4 text-gray-200">
          <li>
            <Link className="linkHover" to="/">
              MainHome
            </Link>
          </li>
          <li>
            <Link className="linkHover" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="linkHover" to="/carddata">
              Services
            </Link>
          </li>
          <li>
            <Link className="linkHover" to="/cardWithLogoData">
              AllServices
            </Link>
          </li>
          <li>
            <Link className="linkHover" to="/form">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
