import React from 'react';
import Swiper from 'swiper';

import Products from './Products';
import Curtain from './Curtain';
import ProductInfo from './ProductInfo';
import Main from './Main';
import { Splashes } from '../Header';

import logoSrc from '../img/logo.png';

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
    this.props.setIndexOpen(this.swiper.realIndex, true);
  }

  backClick() {
    this.swiper.pagination.clickable = true;
    this.swiper.mousewheel.enable();
    this.swiper.autoplay.start();
    this.swiper.attachEvents();
    // this.setState({
    //   index: this.swiper.realIndex,
    //   isOpen: false
    // });
    this.props.setIndexOpen(this.swiper.realIndex, false);
  }

  hasLoaded() {
    if(this.state.isLoading === true) {
      this.setState({isLoading: false})

      this.swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        preventInteractionOnTransition: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        initialSlide: this.props.index,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      });

      this.swiper.autoplay.stop();
      if(!this.props.isOpen)setTimeout(this.swiperStart, 1500);

      var pag = document.getElementsByClassName('swiper-pagination')[0].clientHeight;
      document.getElementById('info-back').style.top = 'calc(50% - ' + pag/window.innerHeight*100/2 + 'vh)';
    }
  }

  swiperStart() {
    this.swiper.autoplay.start();
  }

  kek() {
    console.log('keeek');
  }

  componentDidMount() {
    // if(this.state.isOpen){
    //   this.swiper.pagination.clickable = false;
    //   this.swiper.mousewheel.disable();
    //   this.swiper.detachEvents();
    // }
  }

  render() {
    return (
      <div id="main-page" className='main-page'>
        <Loader isLoading={this.state.isLoading} />
        <LoaderImg isLoading={this.state.isLoading} />
        <Splashes />
        
        <img 
          className={this.state.isLoading ? 'logo' : 'logo logo-hidden'} 
          // onClick={this.props.isOpen ? this.logoClick : undefined}
          src={logoSrc} alt='idealnemoloko logo' 
        />
        { this.props.products && <Products
          isOpen={this.props.isOpen}
          click={this.productClick}
          backClick={this.backClick}
          products={ this.props.products }
          hasLoaded={this.hasLoaded}
        /> }
        <Curtain isOpen={this.props.isOpen} />
        <Main isOpen={this.props.isOpen} lang={this.props.lang} />
        { this.props.products && <ProductInfo 
          product={this.props.products[this.props.index]}
          isOpen={this.props.isOpen}
          backClick={this.backClick}
          lang={this.props.lang}
        />}
      </div>
    );
  }
}

export default MainPage;