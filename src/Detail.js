import React, { Component } from 'react';
import './Detail.css';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
        <Router>
            <div className="Detail">
            <Route path="/detail" render={
                () => {
                    return ( <h1>Hello World </h1>)
                }
            }/>
            </div>
        </Router>
    );
  }
}

export default Detail;
