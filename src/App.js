import { useState } from 'react';
import './App.css';

function App() {

  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  return (
    <div className="container">
      <h1>Color Maker 🪄</h1>

      <div className="display-rgb"  style={{backgroundColor : `rgb(${red}, ${green}, ${blue})`}}>
        <p>RGB( {red}, {green}, {blue})</p>
       
      </div>

      <div className="slidders">
        <div className="slidder">
          <label>{red}</label>
          <input className="red" type="range"
            min={0}
            max={255}
            value={red}
            onChange={(e) => setRed(e.target.value)}
          ></input>
          <label>RED</label>
        </div>
        <div className="slidder">
          <label>{green}</label>
          <input className="green" type="range"
            min={0}
            max={255}
            value={green}
            onChange={(e) => setGreen(e.target.value)}
          ></input>
          <label>GREEN</label>
        </div>
        <div className="slidder">
          <label>{blue}</label>
          <input className="blue" type="range"
            min={0}
            max={255}
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
          ></input>
          <label>BLUE</label>
        </div>
      </div>

    </div>
  );
}

export default App;
