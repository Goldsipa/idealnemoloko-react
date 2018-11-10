import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import WhySlide from './WhySlide';
import WhySlide1 from './WhySlide1';
import WhySlide2 from './WhySlide2';
import WhySlide3 from './WhySlide3';

import '../css/why.css';

import logoSrc from '../img/logo.png';

const WhySwiper = (props) => (
  <div className="why-swiper-container">
    <div className="swiper-wrapper">
      <WhySlide />
      <WhySlide1 />
      <WhySlide2 />
      <WhySlide3 />
    </div>
    <div className='swiper-pagination'>
    </div>
  </div>
);

class WhyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swiper: null,
    }
  }

  componentDidMount() {
    this.setState(
      {
        swiper: new Swiper('.why-swiper-container', {
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
      }
    );
  }

  render() {
    return (
      <div className="why-page">
        <Link to='/'><img className="logo" src={logoSrc} alt='idealnemoloko logo' /></Link>
        <WhySwiper />
      </div>
    );
  }
}

export default WhyPage;