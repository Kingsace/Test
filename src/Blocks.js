import React, { Component } from 'react';
import { Col } from 'reactstrap';
import "./Blocks.css"

class Blocks extends Component {

  render() {
    return (
      <Col className="col" xs="12" sm="6" md="6" lg="4">
        <div className="itemWrapper">
          <div className="img">{this.props.image}</div>
          <div className="description">
            <p> Model: {this.props.model} </p>
            <p> Weight: {this.props.weight} </p>
            <p> Made In: {this.props.madeIn}  </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default Blocks;