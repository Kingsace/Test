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
import $ from 'jquery';


class NavBar extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      item: "Hot",
      isOpen: true
    }
    this.itemList = [];

    this.loadData();
    console.log(this)
  }

  // get data from Json
  loadData = () => {
    axios.get('./itemList.json')
      .then(response => {
        this.setState({
          // array of items from json
          brand: response.data
        });
        console.log('load json')
        console.log(this.state.brand)
        this.itemList = this.state.brand.Hot;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadData()
  }

  closeNavBar = () => {
    if($('.collapse ').hasClass('show')){
      $('.navbar-toggler').click()
    }
  }

  handleClick(e) {

    this.setState({ item: e.item });

    switch (e.item) {

      default:
        this.itemList = this.state.brand.Hot;
        break;

      case "Hot":
        this.itemList = this.state.brand.Hot;
        break;

      case "Devon":
        this.itemList = this.state.brand.Devon;
        break;

      case "Makita":
        this.itemList = this.state.brand.Makita;
        break;

      case "Bosch":
        this.itemList = this.state.brand.Bosch;
        break;

      case "Aeg":
        this.itemList = this.state.brand.Aeg;
        break;
    }

    this.closeNavBar();
  }

  render() {
    console.log('render')
    console.log('itemlist, ',this.itemList)
    console.log('brand, ', this.state.item)
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand> Brand </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={this.state.isOpen} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={(e) => this.handleClick({ e, item: "Hot" })}>HOT</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({ e, item: "Devon" })}>Devon</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({ e, item: "Makita" })}>Makita</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({ e, item: "Bosch" })}>Bosch</Nav.Link>
              <Nav.Link onClick={(e) => this.handleClick({ e, item: "Aeg" })}>AEG</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            {this.itemList.map((item, index) => (
              <Blocks 
                key={index} 
                image={ item.img } 
                model={ item.model } 
                weight={ item.weight }
                madeIn={ item.madeIn }
                brand={this.state.item}
                />
            ))}
          </Row>
        </Container>
      </div>

    );
  }
}



export default NavBar;
