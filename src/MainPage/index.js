import React from 'react';
import Swiper from 'swiper';

import Products from './Products';
import Curtain from './Curtain';
import ProductInfo from './ProductInfo';
import Main from './Main';

import logoSrc from '../img/logo.png';

import products from './products.json';

const API = 'http://104.248.138.81:8000/api/';

const Loader = (props) => (
  <div className={ props.isLoading ? "loader" : "loader loader-hidden" }></div>
);

const LoaderImg = (props) => (
  <img src={logoSrc} className={ props.isLoading ? "loader-img" : "loader-img loader-img-hidden" } alt='logo'></img>
);

class MainPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isOpen: false,
      isLoading: true,
      products: undefined
    }

    this.productClick = this.productClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
    this.swiperStart = this.swiperStart.bind(this);
  }

  productClick() {
    this.swiper.pagination.clickable = false;
    this.swiper.mousewheel.disable();
    this.swiper.autoplay.stop();
    this.swiper.detachEvents();
    this.setState({
      index: this.swiper.realIndex,
      isOpen: true
    });
  }

  backClick() {
    this.swiper.pagination.clickable = true;
    this.swiper.mousewheel.enable();
    this.swiper.autoplay.start();
    this.swiper.attachEvents();
    this.setState({
      index: this.swiper.realIndex,
      isOpen: false
    });
  }

  hasLoaded() {
    this.setState({isLoading: false})
    setTimeout(this.swiperStart, 1500);
  }

  swiperStart() {
    this.swiper.autoplay.start();
  }

  componentDidMount() {
    fetch(API)
      .then( response => response.json() )
      .then( data => this.setState({products: data}));

    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      preventInteractionOnTransition: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
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
      this.swiper.mousewheel.disable();
      this.swiper.detachEvents();
    }
    this.swiper.autoplay.stop();
  }

  render() {
    return (
      <div id="main-page" className='main-page'>
        <Loader isLoading={this.state.isLoading} />
        <LoaderImg isLoading={this.state.isLoading} />

        <img 
          className={this.state.isLoading ? 'logo' : 'logo logo-hidden'} 
          // onClick={this.state.isOpen ? this.logoClick : undefined}
          src={logoSrc} alt='idealnemoloko logo' 
        />
        <Products
          isOpen={this.state.isOpen}
          click={this.productClick}
          products={ this.state.products ? this.props.lang === 'ua' ? this.state.products.ua : this.state.products.ru : products }
          hasLoaded={this.hasLoaded}
        />
        <Curtain isOpen={this.state.isOpen} />
        <Main isOpen={this.state.isOpen} lang={this.props.lang} />
        <ProductInfo 
          product={this.state.products ? this.props.lang === 'ua' ? this.state.products.ua[this.state.index] : this.state.products.ru[this.state.index] : products[0] }
          isOpen={this.state.isOpen}
          backClick={this.backClick}
          lang={this.props.lang}
        />
      </div>
    );
  }
}

export default MainPage;