import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './Banner.css';
import { Pagination, Navigation, Autoplay } from 'swiper/dist/js/swiper.esm'

class Banner extends Component {

  render() {

      const params = {
        modules: [Pagination, Navigation, Autoplay],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        spaceBetween: 30,
        centeredSlides: true,
      }
    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    );
  }

}



export default Banner;
