import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import "./Material.css"

class Material extends Component {

  render() {
    var params = {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
      }
    };
    return (
      <Swiper 
      pagination={params.pagination}
      effect={params.effect}
      paginationClickable={params.paginationClickable}
      direction={params.direction}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    );
  }
}

export default Material;