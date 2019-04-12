import React, { Component } from 'react';
import {
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';
import './NavBar.css';
import { Container, Row } from 'reactstrap';
import Blocks from './Blocks';
import axios from 'axios';

class NavBar extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.state = {
			item: "hot"
    }
  }

  // get data from Json
  loadData = () => {
    let itemBrand;
    switch (this.state.item){

      default:
        itemBrand = "/devon.json"
        break;

      case "devon":
        itemBrand = "/devon.json"
        break;

      case "makita":
        itemBrand = "/makita.json"
        break;

      case "bosch":
        itemBrand = "/bosch.json"
        break;

      case "aeg":
        itemBrand = "/aeg.json"
        break;

    }
    axios.get(itemBrand)
			.then(response => {
        this.setState({
        brand: response.data
      });
      console.log(this.state.brand);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
	
	componentDidMount() {
		this.loadData()
	}

  handleClick(e) {
    this.setState({item: e.item});
    this.loadData()
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Item</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={(e) => this.handleClick({e, item:"hot"})}>HOT</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({e, item:"devon"})}>Devon</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({e, item:"makita"})}>Makita</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({e, item:"bosch"})}>Bosch</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({e, item:"aeg"})}>AEG</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Blocks />
          </Row>
        </Container>
      </div>
      
    );
  }
}



export default NavBar;
