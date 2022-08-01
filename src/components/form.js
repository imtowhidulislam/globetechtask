import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  return (
    <div className="bg-blue-900 w-full h-screen flex ">
      <div className="flex-layout1 flex justify-between py-16 flex-col ">
        <div>
          <h2 className="globe w-full">Globetech Company Limited</h2>
          <p className="text-gray-200 capitalize text-center text-sm space-x-4 mt-12 tracking-widest">
            Make yourself digitalized & more effecient
          </p>
        </div>
        <FontAwesomeIcon
          className="text-4xl cursor-pointer text-gray-200"
          icon={faLeftLong}
        />
      </div>
      <div className="relative flex-layout2 bg-gray-300 flex items-center justify-center h-screen">
        <form action="" className="bg-gray-100 w-80 py-8 px-4 drop-shadow-lg">
          <h2 className="capitalize text-center text-gray-700 text-xl mb-4">
            welcome
          </h2>
          <p className="capitalize text-center  mb-4 text-xs text-gray-300">
            sing in to your account
          </p>
          <div className="border border-gray-400 rounded-lg px-2">
            <input
              type="email"
              placeholder="email"
              autoComplete="email"
              className="form-input bg-transparent p-2"
            />{" "}
          </div>
          <br />
          <div className="mb-4 flex items-center justify-between border border-gray-400 rounded-lg px-2">
            <input
              type="password"
              placeholder="password"
              autoComplete="password"
              className="form-input bg-transparent  p-2"
            />{" "}
            <FontAwesomeIcon icon={faEye} />
          </div>
          <button className="btn bg-cyan-500 w-full text-gray-200">
            login
          </button>
        </form>
        <p className="capitalize text-gray-400 text-center absolute bottom-6 z-30 text-xs">
          globetech company limited
        </p>
      </div>
    </div>
  );
};

export default Form;
