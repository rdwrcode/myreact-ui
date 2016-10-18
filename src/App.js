import React, { Component } from 'react';
import Theme from './ui-material/Theme';
//import IconButtonGithub from './ui-material/IconButtonGithub';
import Boxes from './flexbox/Boxes';
import Navigation from './flexbox/Navigation';
import Full from './flexbox/Full';
import Basic from './grid/Basic';
import Buttons from './bootstrap/Buttons';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React UI experiment</h2>
        </div>
        <p className="App-intro"></p>
        <Theme />  
        <Boxes />
        <Navigation />
        <Full />
        <Basic />
        <Buttons cbs={this.buttonHandler}/>
      </div>
    );
  }
}

export default App;
