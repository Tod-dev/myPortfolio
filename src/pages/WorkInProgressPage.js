import React from "react";

import logo from "../images/logo.png";

const WorkInProgressPage = () => {
  return (
    <div className="container">
      <img src={logo} alt="That's my logo" className="responsiveImg" />
      <p className="App-description">
        My portfolio is currently under development
        <span role="img" aria-label="work in progress" className="wave">
          ⚙️
        </span>
      </p>
    </div>
  );
};

export default WorkInProgressPage;
