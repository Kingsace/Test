import React, { Component } from 'react';
import './Detail.css';
import ImageGallery from 'react-image-gallery';
import { Container, Jumbotron, Button } from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      Img: '',
      madeIn: '',
      userFor: '',
      weight: ''
    }
    this.data = [];
    this.currentIndex = '';
  }

  // get data from Json
  loadData = () => {
    axios.get('../itemList.json')
      .then(response => {
        this.setState({
          // array of items from json
          brand: response.data
        });
        console.log('load json')
        console.log(response.data)
        this.mapData((response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadData();
  }

  mapData = (data) => {
    // let brand = this.props.location.pathname.split('/detail/').pop().trim();
    let para = this.props.location.pathname.split('/').pop().trim();
    var result = para.split('_');
    let brand = result[0];
    let model = result[1];

    let targetData, index;
    console.log("data[brand]", data[brand]);
    $(data[brand]).each(function (i, el) {
      if (el.model === model) {
        targetData = this;
        index = i;
        return;
      }
    })
    this.data = data[brand];
    this.currentIndex = index; 
    let Des = targetData.description;
    let MadeIn = targetData.madeIn;
    let Img = targetData.img;
    let useFor = targetData.useFor;
    let weight = targetData.weight;

    console.log(this);
    console.log('i', index);
    this.setState({
      // array of items from json
      description: Des,
      Img: Img,
      madeIn: MadeIn,
      userFor: useFor,
      weight: weight

    });

    console.log(targetData);

  }

  render() {
    // if (!this.state.description) {
    //   return null;
    // }
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    const des = this.state.description;
    console.log(des)

    console.log('testing, ', this.data);
    console.log('current, ', this.data[this.currentIndex]);

    const previousItem = this.data[this.currentIndex-1];
    console.log('previous, ', previousItem) 

    return (

      <div className="detailWrapper">

        <div className="galleryWrapper">
          <ImageGallery items={images} />
        </div>

        <div className="descriptionWrapper">
          <Jumbotron fluid>
            <Container>
              <h1>Descrpition: {des}</h1>
              <p>

              </p>
            </Container>
          </Jumbotron>

        </div>

        <div className="buttonWrapper">
          <Button variant="Link">Prev: </Button>

          <Button variant="Link">Next: </Button>
        </div>
      </div>
    );
  }
}

export default Detail;
