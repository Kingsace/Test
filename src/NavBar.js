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
    console.log(this);
    this.array = [];
    this.uniqueNames = [];
  }

  // get data from Json
  loadData = () => {
    axios.get('./itemList.json')
      .then(response => {

        for (const key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            console.log(key)
            // const element = response.data[key];
            this.array.push(key);
          }
        }

        this.setState({
          // array of items from json
          brand: response.data,
        });
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
    if ($('.collapse ').hasClass('show')) {
      $('.navbar-toggler').click()
    }
  }

  handleClick(e) {

    this.setState({ item: e.item });
    this.itemList = this.state.brand[e.item];
    this.closeNavBar();
  }

  render() {
    this.array = [...new Set(this.array)];
    console.log('array, ', this.array)
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand> Brand </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={this.state.isOpen} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            {this.array.map((item, index) => (
              <Nav.Link key={index} onClick={(e) => this.handleClick({e, item: item})}> {item}</Nav.Link>
            ))}

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
                image={item.img}
                model={item.model}
                weight={item.weight}
                madeIn={item.madeIn}
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
