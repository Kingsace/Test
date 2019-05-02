import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/dist/js/swiper.esm';
import "./Material.css";

class Material extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }

    console.log(EffectCoverflow)
  }


  // componentWillMount() {
  //   this.fetchPhotos();
  // }


  render() {
    const params = {
      modules: [Pagination, Navigation, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };
    return (
      <Swiper {...params}>
        <div>concrete</div>
        <div>wood</div>
        <div>metal</div>
      </Swiper>
    );
  }
}

export default Material;