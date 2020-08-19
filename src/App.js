import React from "react";
import "./App.css";

import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="row">
        <img src={logo} alt="That's my logo" />
        <p className="App-description">
          <span className="text">
            My portfolio is currently under development
          </span>
          <span role="img" aria-label="work in progress" className="wave">
            ⚙️
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
