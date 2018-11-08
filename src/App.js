import React, { Component } from 'react';
import Swiper from 'swiper';

import Products from './Products';
import Curtain from './Curtain';
import ProductInfo from './ProductInfo';
import Main from './Main';

import products from './products.json';

import logoSrc from './img/logo.png';

import splashLeft from './img/splash-left.png';
import splashRight from './img/splash-right.png';

import fb_logo from './img/fb-logo.png';
import ig_logo from './img/ig-logo.png';
import yt_logo from './img/yt-logo.png';

const Social = (props) => {
  return (
      <div className="social" href='#'>
        <a href='#'><img src={fb_logo} alt='fb logo' /></a>
        <a href='#'><img src={ig_logo} alt='fb logo' /></a>
        <a href='#'><img src={yt_logo} alt='fb logo' /></a>
      </div>
  );
}

const LeftBar = (props) => {
  return (
    <div className='left-bar'>
      <span><a href="#">ПРОДУКЦІЯ</a></span>
      <span><a href="#">ЧОМУ ІДЕАЛЬ НЕМОЛОКО</a></span>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }

    this.toggleCurtain = this.toggleCurtain.bind(this);
    this.productClick = this.productClick.bind(this);
    this.backClick = this.backClick.bind(this);
  }

  toggleCurtain() {
    if(this.state.curtain) {
      this.mySwiper.mousewheel.disable();
      this.mySwiper.detachEvents();
    } else {
      this.mySwiper.mousewheel.enable();
      this.mySwiper.attachEvents();
    }
    this.setState({index: this.mySwiper.realIndex});
  }

  productClick() {
    this.mySwiper.mousewheel.disable();
    this.mySwiper.detachEvents();
    console.log(this.mySwiper.pagination.update);
    
    this.curtain.classList.add('curtain-hidden');
    this.main.classList.add('main-hidden');
    this.productInfo.classList.add('info-hidden');
    this.paginationBullets.classList.add('bullets-hidden');
  
    // setTimeout(addBackListener, 1500);
    // setTimeout(сTextToInfo, 750);
    
    console.log(this.mySwiper.realIndex);
    this.titles[this.mySwiper.activeIndex].removeEventListener('click', this.productClick);
    this.images[this.mySwiper.activeIndex].removeEventListener('click', this.productClick);
    this.logo.addEventListener('click', this.backClick);
    this.setState({index: this.mySwiper.realIndex});
  }

  backClick() {
    this.mySwiper.mousewheel.enable();
    this.mySwiper.attachEvents();

    this.curtain.classList.remove('curtain-hidden');
    this.main.classList.remove('main-hidden');
    this.productInfo.classList.remove('info-hidden');
    this.paginationBullets.classList.remove('bullets-hidden');
  
    // setTimeout(addProductListener, 1500);
    // setTimeout(сTextToMain, 750);
    
    this.logo.removeEventListener('click', this.backClick);
    this.titles[this.mySwiper.activeIndex].addEventListener('click', this.productClick);
    this.images[this.mySwiper.activeIndex].addEventListener('click', this.productClick);
  }

  addRemoveClass(el, rem, add) {
    el.classList.remove(rem);
    el.classList.add(add);
  }

  componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    this.titles = document.getElementsByClassName('swiper-slide-right-title');
    this.images = document.getElementsByClassName('swiper-slide-right-img');
    this.logo = document.getElementsByClassName('logo')[0];
    this.curtain = document.getElementsByClassName('curtain')[0];
    this.main = document.getElementsByClassName('main')[0];
    this.productInfo = document.getElementsByClassName('info')[0];
    this.paginationBullets = document.getElementsByClassName('swiper-pagination')[0];
    console.log(this.paginationBullets);

    for (let i = 0; i < this.titles.length; i++) {
      this.titles[i].addEventListener("click", this.productClick);
      this.images[i].addEventListener("click", this.productClick);
    }
  }

  render() {
    return (
      <div>
        <img className="logo" src={logoSrc} alt='idealnemoloko logo' />
        <img className='splash-left' src={splashLeft} alt='milk splash'/>
        <img className='splash-right' src={splashRight} alt='milk splash'/>
        <LeftBar />
        <Social />
        <Products />
        <Curtain />
        <Main />
        <ProductInfo product={ this.mySwiper ? products[this.state.index] : products[0]} />
      </div>
    );
  }
}

export default App;
