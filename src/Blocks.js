import React, { Component } from 'react';
import { Col } from 'reactstrap';
import "./Blocks.css"
import { Card } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class Blocks extends Component {

  render() {

    const Button = () => (
      <Router>
        <Route render={({ history}) => (
          <button
            variant="primary"
            type='button'
            onClick={() => { 
              console.log(this.props)
              history.push('/detail/'+this.props.brand+'_'+this.props.model); 
              window.location.reload(); 
            }}
          >
            More Detail!
          </button>
        )} />
      </Router>
    )

    return (
      <Col className="col" xs="12" sm="6" md="6" lg="3">
        <Card>
          <div className="img">{this.props.image}</div>
            <div className="itemWrapper">
            <div className="description">
              <p> Model: {this.props.model} </p>
              <p> Weight: {this.props.weight} </p>
              <p> Made In: {this.props.madeIn}  </p>
              <Button />
              {/* <Button variant="primary" to="/detail" onClick={this.routeChange}>Go somewhere</Button> */}
          
            </div>
          </div>
        </Card>
      </Col>
    )
  }
}

export default Blocks;