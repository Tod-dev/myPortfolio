import React from "react";

import "./WorkInProgressPage.css";
import logo from "../images/logo.png";
import github from "../images/github.png";
import ig from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import Icon from "../components/Icon";

const WorkInProgressPage = () => {
  return (
    <div className="Colonna fullSpace centered">
      <img src={logo} alt="That's my logo" className="responsiveImg" />
      <span role="img" aria-label="work in progress" className="wave">
        ⚙️
      </span>
      <p className="App-description">
        My portfolio is currently under development
      </p>

      <div
        className="Riga"
        style={{
          width: "80%",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Icon
          name="gitHub"
          imageUrl={github}
          link="https://github.com/Tod-dev"
        />
        <Icon
          name="Instagram"
          imageUrl={ig}
          link="https://www.instagram.com/marc0todar0/"
        />
        <Icon
          name="linkedin"
          imageUrl={linkedin}
          link="https://www.linkedin.com/in/marco-todaro-155bb5195/"
        />
      </div>
    </div>
  );
};

export default WorkInProgressPage;
