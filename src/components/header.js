import React from "react";

const Header = () => {
  return (
    <div className="grid ">
      <div>
        <h2>
          welcome to <span>globetech</span>
        </h2>
        <p>
          we are committed to deliver <span>best IT service</span>. our
          consultants have experience in working with clients. we have extensive
          experience in the software application space and also offer a broad
          range and depth of technology
        </p>
        <div>
          <button>support us</button>
          <button>our mission</button>
        </div>
      </div>
      
      <div>
        <img src="http://unsplash.it/1000/1000?image=452" alt="" />
      </div>
    </div>
  );
};

export default Header;
