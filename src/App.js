import React from "react";
import "./App.css";

import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="That's my logo" className="responsiveImg" />
      <p className="App-description">
        My portfolio is currently under development
        <span role="img" aria-label="work in progress" className="wave">
          ⚙️
        </span>
      </p>
    </div>
  );
}

export default App;
