import React from 'react';
import '../css/products.css';
import '../css/my-swiper.css';
import vivsyane from '../img/vivsyane.png';
import grechane from '../img/grechane.png';

import oves from '../img/oves.png';
import grechka from '../img/grechka.png';

import products from './products.json';
const images = [vivsyane, grechane];
const imagesDesc = [oves, grechka];

const SwiperSlideRight = (props) => {
  return (
    <div className="swiper-slide-right">
      <div 
        className={ "swiper-slide-right-title" + (props.isOpen ? " swiper-slide-right-title-hidden" : "")}
        onClick={props.isOpen ? undefined : props.click}
      >
        - {props.product.title} -
      </div>
      <div 
        className={ "swiper-slide-right-img" + (props.isOpen ? " swiper-slide-right-img-hidden" : "")}
        onClick={props.isOpen ? undefined : props.click}
      >
        <img src={images[props.index]}  alt={props.text}/>
      </div>
    </div>
  );
}

const SwiperSlide = (props) => {
  let bgImg = {backgroundImage: "radial-gradient(circle, " + props.product.inner_gradient_color + ", " + props.product.inner_gradient_color + ", " + props.product.outer_gradient_color + ", " + props.product.outer_gradient_color + ")"}
  return (
    <div className={"swiper-slide"} style={{backgroundColor: props.product.outer_gradient_color}}>
      <div className="swiper-slide-left" style={bgImg}>
        <img src={imagesDesc[props.index]} alt={'small_' + props.index} />
      </div>
      <SwiperSlideRight 
        text={props.text}
        index={props.index}
        product={props.product}
        click={props.click}
        isOpen={props.isOpen}
      />
    </div>
  );
}

class Products extends React.Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {products.map(
            (product,index) => (
              <SwiperSlide
                key={ 'product' + index }
                index={index}
                product={product} 
                click={this.props.click}
                isOpen={this.props.isOpen}
              />
            )
          )}
        </div>
        <div 
          className={ this.props.isOpen ? 'swiper-pagination swiper-pagination-bullets bullets-hidden' : 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets' }>
        </div>
        
      </div>
    );
  }
}

export default Products;