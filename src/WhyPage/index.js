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
      <WhySlide index={props.index} />
      <WhySlide1 index={props.index} />
      <WhySlide2 index={props.index} />
      <WhySlide3 index={props.index} />
    </div>
    <div className='swiper-pagination'>
    </div>
  </div>
);

class WhyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: undefined
    }
    this.kek = this.kek.bind(this);
  }

  kek() {
    this.setState({index: this.swiper.realIndex});
  }

  componentDidMount() {
    this.swiper = new Swiper('.why-swiper-container', {
      direction: 'vertical',
      speed: 1000,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        transitionEnd: this.kek
      }
    });
    setTimeout(this.kek, 100);
  }

  render() {
    return (
      <div className="why-page">
        <Link to='/idealnemoloko-react/'><img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' /></Link>
        <WhySwiper index={this.state.index} />
      </div>
    ); 
  }
}

export default WhyPage;