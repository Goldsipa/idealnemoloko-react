import React from 'react';
import { Link } from 'react-router-dom';

import splashLeft from './img/splash-left.png';
import splashRight from './img/splash-right.png';

import fb_logo from './img/fb-logo.png';
import ig_logo from './img/ig-logo.png';
// import yt_logo from './img/yt-logo.png';

export const Splashes = (props) => (
  <div>
    <img className='splash-left' src={splashLeft} alt='milk splash'/>
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
        {/* <a href='https://www.youtube.com/' target='_blank' rel='nofollow noopener noreferrer'>
          <img src={yt_logo} alt='fb logo' />
        </a> */}
      </div>
  );
}

const LeftBar = (props) => {
  return (
    <div className='left-bar'>
      <span><Link to='/idealnemoloko-react/production'>
        { props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
      </Link></span>
      <span><Link to='/idealnemoloko-react/why'>
        { props.lang === 'ua' ? 'ЧОМУ ІДЕАЛЬ НЕМОЛОКО' : 'ПОЧЕМУ ІДЕАЛЬ НЕМОЛОКО'}
      </Link></span>
    </div>
  );
};

const Header = (props) => (
  <div>
    <LeftBar lang={props.lang} />
    <Social />
    <span className="lang" onClick={props.lang === 'ua' ? props.setLangRu : props.setLangUa}>
      {props.lang === 'ua' ? 'RU' : 'UA'}
    </span>
  </div>
);

export default Header;