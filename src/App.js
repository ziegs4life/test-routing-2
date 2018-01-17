import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Foo from './foo.js'
import Bar from './bar.js'

import {Route, Link, withRouter } from 'react-router-dom';

class App extends Component {

  clickHandler(){
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.clickHandler.bind(this)}>Welcome to React</h1>
        </header>
        <Link to="/foo">Take me to Foo</Link>
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
      </div>
    );
  }
}

export default App;
