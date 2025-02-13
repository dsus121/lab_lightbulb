import React from "react";
import { useState } from 'react';
import bulbOn from "./assets/bulb-on.png"; // provided
import bulbOff from "./assets/bulb-off.png";
import switchSound from './assets/light-switch-sound.mp3';
import "./App.css";

// HOPE this is right
function App() {
  const [isLit, setIsLit] = useState(true);
  const [brightness, setBrightness] = useState(100);

  const toggleLight = () => {
    const audio = new Audio(switchSound);
    audio.play();
    setIsLit(!isLit);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
  };

  return (
    <div className={`room ${isLit ? '' : 'dark'}`}>
      <h1>This room is {isLit ? 'LIT' : 'DARK'}</h1>
      <img 
        src={isLit ? bulbOn : bulbOff} 
        alt="light bulb" 
        className={isLit ? '' : 'dark'} 
        style={{ filter: `brightness(${brightness}%)` }}
      />
      <div className={`switch ${isLit ? '' : 'dark'}`} onClick={toggleLight}>
        <div className={`switch-button ${isLit ? '' : 'dark'}`}></div>
      </div>
      <input 
        type="range" 
        min="0" 
        max="200" 
        value={brightness} 
        onChange={handleBrightnessChange} 
        className="brightness-slider"
      />
    </div>
  );
}

export default App;