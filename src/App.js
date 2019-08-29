import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A new info for me</h1>
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}
export default App;