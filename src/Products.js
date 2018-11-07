import React from 'react';
import Swiper from 'swiper';
import './css/products.css';
import './css/my-swiper.css';
import vivsyane from './img/vivsyane.png';
import grechane from './img/grechane.png';

const SwiperSlideRight = (props) => {
  return (
    <div className={"swiper-slide-right " + props.classN} >
      <div className="swiper-slide-right-title">{props.text}</div>
      <div className="swiper-slide-right-img">
        <img src={props.src}  alt={props.text}/>
      </div>
    </div>
  );
}

const SwiperSlide = (props) => {
  return (
    <div className="swiper-slide">
      <SwiperSlideRight text={props.text} src={props.src} classN={props.classN} />
    </div>
  );
}

class Products extends React.Component {
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <SwiperSlide text="– УЛЮБЛЕНА ВІВСЯНКА –" src={vivsyane} classN='slide-vivsyane' />
          <SwiperSlide text="– УЛЮБЛЕНА ГРЕЧКА –" src={grechane} classN='slide-grechane' />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}

export default Products;