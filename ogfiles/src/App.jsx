import bulbOn from './assets/bulb-on.png'

import './App.css'

function App() {
  
  return (
    <div>
      <h1>This room is LIT</h1>
      <img src={bulbOn} alt="light bulb" />
      <div className='switch'>
        <div className='switch-button'></div>
      </div>
    </div>
  )
}

export default App
