import React, { Component } from 'react';
import {
    CSSTransitionGroup,
    // TransitionGroup
} from 'react-transition-group';
import logo from './logo.svg';
import MyApp from './MyApp'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <CSSTransitionGroup transitionName="logo"
                                component="div"
                                transitionAppear={true}
                                transitionAppearTimeout={0}  //must set time value is 0
                                transitionEnter={false}
                                transitionLeave={false}>
                <img src={logo}  className="App-logo"  alt="logo" />
            </CSSTransitionGroup>

          <h2>Welcome to React-ReFlux-Animated</h2>
        </div>
        <MyApp/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
