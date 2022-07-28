import React from "react";
import { Navbar, Header } from "./index";

const HomePage = () => {
  return (
    <div className="bg-blue-800 h-screen">
      <div className="area_definer">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
