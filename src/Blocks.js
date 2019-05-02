import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'reactstrap';
import "./Blocks.css"
import { Card, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Detail from './Detail';


class Blocks extends Component {

  showDetail(){
    ReactDOM.render(<Router ><Detail /></Router>, document.getElementById('detail'));
  }
  
  render() {

    const Button = () => (
      <Router>
        <Route render={({ history}) => (
          <button
            variant="primary"
            type='button'
            onClick={() => { 
              history.push('/detail/'+this.props.model); 
              this.showDetail(); 
              console.log(this)
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
              
              {/* <Button variant="primary" onClick={this.routeChange}>Go somewhere</Button> */}
          
            </div>
          </div>
        </Card>
      </Col>
    )
  }
}

export default Blocks;