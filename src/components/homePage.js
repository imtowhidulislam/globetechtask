import React, { useEffect, useRef } from "react";
import { Navbar, Header } from "./index";

const HomePage = () => {
  let navSize = useRef(null);
  useEffect(() => {
    // const height = navSize.current.getBoundingClientRect();

    console.log(navSize.current.children[0].getBoundingClientRect().height);
  }, []);
  return (
    <div className="bg-blue-900 flex min-h-screen items-center justify-center snap-none">
      <div className=" area_definer" ref={navSize}>
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
