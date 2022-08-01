import React, { useEffect, useRef } from "react";
import Header from "./header";
const Homepage = () => {
  let navSize = useRef(null);
  useEffect(() => {
    // const height = navSize.current.getBoundingClientRect();

    console.log(navSize.current.children[0].getBoundingClientRect().height);
  }, []);
  return (
    <div className="bg-blue-900 flex items-center justify-center snap-none">
      <div className=" area_definer" ref={navSize}>
        <Header />
      </div>
    </div>
  );
};

export default Homepage;
