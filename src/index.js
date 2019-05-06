import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Banner from './Banner';
import NavBar from './NavBar';
import Material from './Material';
import Detail from './Detail';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// var createReactClass = require('create-react-class');

class MainPage extends React.Component {
  render() {
    return (
      <div className="innerContainer">
        <Router>
            <Route exact path="/" component={Banner} />
            <Route exact path="/" component={Material} />
            <Route exact path="/" component={NavBar} />
            <Route path="/detail" component={Detail} />
        </Router>

      </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainPage />, document.getElementById('wrapper'));
// ReactDOM.render(<Banner />, document.getElementById('banner'));
// ReactDOM.render(<NavBar />, document.getElementById('navbar'));
// ReactDOM.render(<Material />, document.getElementById('material'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
