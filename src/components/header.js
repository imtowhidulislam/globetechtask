import React from "react";

const Header = () => {
  return (
    <div className="text-gray-200 grid grid-cols-grid-cards gap-8 place-items-center">
      <div>
        <h2 className="text-6xl text-cyan-400 font-bold capitalize">
          welcome to <span className="text-yellow-400">globetech</span>
        </h2>
        <p className="my-8 ">
          we are committed to deliver{" "}
          <span className="text-yellow-300 capitalize">best IT service</span>.
          our consultants have experience in working with clients. we have
          extensive experience in the software application space and also offer
          a broad range and depth of technology
        </p>
        <div className="flex gap-2">
          <button className="btn bg-yellow-400  text-gray-800">
            support us
          </button>
          <button className="btn border-2 border-gray-200 ">our mission</button>
        </div>
      </div>

      <div className="block h-full rounded-lg overflow-hidden border-2 border-cyan-300">
        <img
          className="h-full object-cover"
          src="http://unsplash.it/1000/1000?image=452"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
