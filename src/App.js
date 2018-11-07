import React, { Component } from 'react';
import Products from './Products';
import Curtain from './Curtain';
import Main from './Main';

import logo from './img/logo.png';

import splashLeft from './img/splash-left.png';
import splashRight from './img/splash-right.png';
import leaves from './img/leaves.png';

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
      <span><a href="#">ГОЛОВНА</a></span>
      <span><a href="#">КОРИСТЬ</a></span>
      <span><a href="#">ПРОДУКЦІЯ</a></span>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt='idealnemoloko logo' />
        <img className='splash-left' src={splashLeft} alt='milk splash'/>
        <img className='splash-right' src={splashRight} alt='milk splash'/>
        <img className='leaves' src={leaves} alt='milk splash'/>
        <LeftBar />
        <Social />
        <Products />
        <Curtain />
        <Main />
      </div>
    );
  }
}

export default App;
