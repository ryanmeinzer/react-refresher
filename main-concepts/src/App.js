import React from 'react'
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Time from './Time'
import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import Warning from './Warning'

function App() {
  const messages = ['Hi', 'Hello', 'Yo']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {messages.length > 0 &&
          <h1>You have {messages.length} messages.</h1>
        }
        <LoginControl />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Time time={new Date()} />
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={false} />
        <Warning />
      </header>
    </div>
  );
}

// setInterval(App, 1000)

export default App;
