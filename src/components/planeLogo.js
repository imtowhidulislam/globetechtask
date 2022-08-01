import React from "react";

const PlaneLogo = ({
  FontAwesomeIcon,
  faShuttleSpace,
  handleLogo,
  isHover,
}) => {
  return (
    <div className="main_plane_wrapper">
      <div
        className={`plane_container flex items-center justify-start gap-2 ${
          isHover ? "plane_container-open" : "plane_container-close"
        }`}
      >
        <div className="plane_bars">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className=" bg-transparent " onMouseEnter={handleLogo}>
          <FontAwesomeIcon
            className="text-5xl text-gray-400 cursor-pointer"
            icon={faShuttleSpace}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default PlaneLogo;
