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
      swiper: null,

      isOpen: false
    }

    this.productClick = this.productClick.bind(this);
    this.logoClick = this.logoClick.bind(this);
  }

  productClick() {
    console.log('prod');
    this.state.swiper.pagination.clickable = false;
    this.state.swiper.mousewheel.disable();
    this.state.swiper.detachEvents();
    this.setState({
      index: this.state.swiper.realIndex,
      isOpen: true
    });
  }

  logoClick() {
    console.log('logo');
    this.state.swiper.pagination.clickable = true;
    this.state.swiper.mousewheel.enable();
    this.state.swiper.attachEvents();
    this.setState({
      index: this.state.swiper.realIndex,
      isOpen: false
    });
  }

  componentDidMount() {
    this.state.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
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
          product={this.state.swiper ? products[this.state.index] : products[0]}
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

export default MainPage;