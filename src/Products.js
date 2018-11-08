import React from 'react';
import './css/products.css';
import './css/my-swiper.css';
import vivsyane from './img/vivsyane.png';
import grechane from './img/grechane.png';

import products from './products.json';

const SwiperSlideRight = (props) => {
  return (
    <div className="swiper-slide-right">
      <div className="swiper-slide-right-title">- {props.product.title} -</div>
      <div className="swiper-slide-right-img">
        <img src={props.src}  alt={props.text}/>
      </div>
    </div>
  );
}

const SwiperSlide = (props) => {
  return (
    <div className={"swiper-slide " + props.classN} >
      <SwiperSlideRight text={props.text} src={props.src} product={props.product} />
    </div>
  );
}

class Products extends React.Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <SwiperSlide src={vivsyane} classN='slide-vivsyane' product={products[0]} />
          <SwiperSlide src={grechane} classN='slide-grechane' product={products[1]} />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}

export default Products;