import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import UploadImg from './upload';
import ImgPuzzle from './imgPuzzle';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UploadImg} />
          <Route path="/puzzle" component={ImgPuzzle} />
        </Switch>
      </Router>
    );
  }
}

export default App;