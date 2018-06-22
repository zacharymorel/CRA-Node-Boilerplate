import React, { Component } from 'react'
import logo from './images/logo.svg'
import './styles/App.css'

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/ping', {mode: 'cors'})
      .then(res => res.json())
      .then(res => console.log('Response from Express API: ', res))
      .catch(err => console.log('ERR in App.js api ping: ', err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
