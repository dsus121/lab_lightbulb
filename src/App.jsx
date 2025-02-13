import React from "react";
import { useState } from "react";
import bulbOn from "./assets/bulb-on.png";
import bulbOff from "./assets/bulb-on.png";
import "./App.css";

function App() {
  const [isLit, setIsLit] = useState(true);

  const toggleLight = () => {
    setIsLit(!isLit);
  };

  return (
    <div className={`room ${isLit ? "" : "dark"}`}>
      <h1>This room is {isLit ? "LIT" : "DARK"}</h1>
      <img
        src={isLit ? bulbOn : bulbOff}
        alt="light bulb"
        className={isLit ? "" : "dark"}
      />
      <div className={`switch ${isLit ? "" : "dark"}`} onClick={toggleLight}>
        <div className={`switch-button ${isLit ? "" : "dark"}`}></div>
      </div>
    </div>
  );
}

export default App;
