import React, {Component} from 'react';
import './App.css';

import StopWatch from './StopWatch.js';
import Countdown from './Countdown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timer Demo</div>
        <div className="Timers">
          <StopWatch />
          <Countdown />
        </div>
      </div>
    )
  }
}

export default App;
