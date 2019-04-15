import React, { Component } from 'react';
import { Col } from 'reactstrap';
import "./Blocks.css"
import { Card, Button } from 'react-bootstrap';

class Blocks extends Component {

  render() {
    return (
      <Col className="col" xs="12" sm="6" md="6" lg="3">
        <Card>
          <div className="img">{this.props.image}</div>
            <div className="itemWrapper">
            <div className="description">
              <p> Model: {this.props.model} </p>
              <p> Weight: {this.props.weight} </p>
              <p> Made In: {this.props.madeIn}  </p>
              <Button variant="primary">Go somewhere</Button>
            </div>
          </div>
        </Card>
      </Col>
    )
  }
}

export default Blocks;