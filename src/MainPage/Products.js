import React from 'react';
import '../css/products.css';
import '../css/my-swiper.css';
import vivsyane from '../img/vivsyane.png';
import grechane from '../img/grechane.png';

import products from './products.json';
const images = [vivsyane, grechane];

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
        <img src={props.src}  alt={props.text}/>
      </div>
    </div>
  );
}

const SwiperSlide = (props) => {
  return (
    <div className={"swiper-slide " + props.product.classN} >
      <SwiperSlideRight 
        text={props.text}
        src={props.src}
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
                src={images[index]}
                product={product} 
                click={this.props.click}
                isOpen={this.props.isOpen}
              />
            )
          )}
        </div>
        <div 
          className={ this.props.isOpen ? 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets bullets-hidden' : 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets' }>
        </div>
        
      </div>
    );
  }
}

export default Products;