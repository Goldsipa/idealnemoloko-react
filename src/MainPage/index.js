import React from 'react';
import Swiper from 'swiper';

import Products from './Products';
import Curtain from './Curtain';
import ProductInfo from './ProductInfo';
import Main from './Main';

import logoSrc from '../img/logo.png';

import products from './products.json';

class MainPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isOpen: false
    }

    this.productClick = this.productClick.bind(this);
    this.logoClick = this.logoClick.bind(this);
  }

  productClick() {
    this.swiper.pagination.clickable = false;
    console.log(this.swiper.pagination.update);
    this.swiper.mousewheel.disable();
    this.swiper.autoplay.stop();
    this.swiper.detachEvents();
    this.setState({
      index: this.swiper.realIndex,
      isOpen: true
    });
  }

  logoClick() {
    this.swiper.pagination.clickable = true;
    console.log(this.swiper.pagination);
    this.swiper.mousewheel.enable();
    this.swiper.autoplay.start();
    this.swiper.attachEvents();
    this.setState({
      index: this.swiper.realIndex,
      isOpen: false
    });
  }

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      speed: 640,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      initialSlide: this.state.index,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });
    if(this.state.isOpen){
      this.swiper.pagination.clickable = false;
      console.log(this.swiper.pagination);
      this.swiper.mousewheel.disable();
      this.swiper.detachEvents();
    }
  }

  render() {
    return (
      <div className='main-page'>
        <img 
          className={this.state.isOpen ? 'logo logo-hidden' : 'logo'} 
          onClick={this.state.isOpen ? this.logoClick : undefined}
          src={logoSrc} alt='idealnemoloko logo' 
        />
        <Products isOpen={this.state.isOpen} click={this.productClick}/>
        <Curtain isOpen={this.state.isOpen} />
        <Main isOpen={this.state.isOpen} />
        <ProductInfo 
          product={this.state.index ? products[this.state.index] : products[0]}
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

export default MainPage;