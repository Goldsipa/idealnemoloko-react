import React from 'react';
import { Link } from 'react-router-dom';

import splashLeft from './img/splash-left.png';
import splashLeftNotMain from './img/splash-left-not-main.png';
import splashRight from './img/splash-right.png';

import fb_logo from './img/fb-logo.png';
import ig_logo from './img/ig-logo.png';
import yt_logo from './img/yt-logo.png';

export const Splashes = (props) => (
  <div>
    <img className='splash-left' src={splashLeft} alt='milk splash'/>
    <img className='splash-right' src={splashRight} alt='milk splash'/>
  </div>
);

export const SplashesNotMain = (props) => (
  <div>
    <img className='splash-left-not-main' src={splashLeftNotMain} alt='milk splash'/>
    <img className='splash-right' src={splashRight} alt='milk splash'/>
  </div>
);

const Social = (props) => {
  return (
      <div className="social">
        <a href='https://www.facebook.com/idealnemoloko/' target='_blank' rel='nofollow noopener noreferrer'>
          <img src={fb_logo} alt='fb logo' />
        </a>
        <a href='https://www.instagram.com/idealnemoloko/' target='_blank' rel='nofollow noopener noreferrer'>
          <img src={ig_logo} alt='fb logo' />
        </a>
        <a href='https://www.youtube.com/channel/UCvzcZ0FN5CEM5XVeIZLZCpg/featured' target='_blank' rel='nofollow noopener noreferrer'>
          <img src={yt_logo} alt='fb logo' />
        </a>
      </div>
  );
}

export const LeftBar = (props) => {
  return (
    <div className='left-bar'>
      {props.children}
    </div>
  );
};

export const LeftBarOuter = (props) => (
  <div className='left-bar-outer'>
    <LeftBar>
      <span><Link to='/why'>
        { props.lang === 'ua' ? 'ПРО «ІДЕАЛЬ НЕМОЛОКО»' : 'ПРО «ІДЕАЛЬ НЕМОЛОКО»'}
      </Link></span>
      <span><Link to='/production'>
        { props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
      </Link></span>
      <span><Link to='/recipes'>
        { props.lang === 'ua' ? 'РЕЦЕПТИ' : 'РЕЦЕПТЫ'}
      </Link></span>
    </LeftBar>
    <Social />
    <span className="lang" onClick={props.lang === 'ua' ? props.setLangRu : props.setLangUa}>
      {props.lang === 'ua' ? 'RU' : 'UA'}
    </span>
  </div>
);

const Header = (props) => (
  <div className="left-bar-header">
    <LeftBar>
      <span><Link to='/why'>
        { props.lang === 'ua' ? 'ПРО «ІДЕАЛЬ НЕМОЛОКО»' : 'ПРО «ІДЕАЛЬ НЕМОЛОКО»'}
      </Link></span>
      <span><Link to='/production'>
        { props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
      </Link></span>
      <span><Link to='/recipes'>
        { props.lang === 'ua' ? 'РЕЦЕПТИ' : 'РЕЦЕПТЫ'}
      </Link></span>
    </LeftBar>
    <Social />
    <span className="lang" onClick={props.lang === 'ua' ? props.setLangRu : props.setLangUa}>
      {props.lang === 'ua' ? 'RU' : 'UA'}
    </span>
  </div>
);

export default Header;