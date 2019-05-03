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

var createReactClass = require('create-react-class');

var mainLayout = createReactClass({
    render(){
        return(
            <div className="innerContainer">
                <Banner />
                <Material />
                <NavBar />
            </div>
        )
    }
})

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={mainLayout} />
        <Route path="/detail" component={Detail} />
      </div>
    </Router>
  )

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(routing, document.getElementById('wrapper'));
// ReactDOM.render(<Banner />, document.getElementById('banner'));
// ReactDOM.render(<NavBar />, document.getElementById('navbar'));
// ReactDOM.render(<Material />, document.getElementById('material'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
