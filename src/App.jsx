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

// function to employ audio
const playSwitchSound = () => {
  const audio = new Audio(switchSound);
  audio.play();
};

// function to toggle the light
// added calling the sound here, as it wasn't working properly before
const toggleLight = () => {
  console.log('switch toggled');
  playSwitchSound();
  setIsLit(!isLit);
  console.log(`Light is now ${!isLit ? 'ON' : 'OFF'}`);
};

// e is event
const handleBrightnessChange = (e) => {
  console.log('Brightness slider changed');
  setBrightness(e.target.value);
  console.log(`Brightness is now ${e.target.value}%`); // logging the percentage
};

return (
  <div className={`room ${isLit ? '' : 'dark'}`}>
    <h1>This room is {isLit ? 'LIT' : 'DARK'}</h1>
    <img 
      src={isLit ? bulbOn : bulbOff} 
      alt="light bulb" 
      className={isLit ? '' : 'dark'} 
      style={{ filter: `brightness(${brightness}%)` }} // got help on this bit
    />
    <div className={`switch ${isLit ? '' : 'dark'}`} onClick={toggleLight}>
      <div className={`switch-button ${isLit ? '' : 'dark'}`}></div>
    </div>
    <input 
      type="range" // am SO going to use this in the future
      min="0" 
      max="200" // tried 100 first, but 200 is better
      value={brightness} 
      onChange={handleBrightnessChange} 
      className="brightness-slider"
    />
  </div>
);
}

export default App;