import React from 'react'
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Time from './Time'
import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Time time={new Date()} />
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={false} />
        
      </header>
    </div>
  );
}

// setInterval(App, 1000)

export default App;
