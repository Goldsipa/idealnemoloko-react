import React from 'react';
import Swiper from 'swiper';
import { LeftBar } from '../Header';
import { MyDelayLink } from '../DelayLink';

import { Splashes } from '../Header';
import WhySlide from './WhySlide';
import WhySlide1 from './WhySlide1';
import WhySlide2 from './WhySlide2';
import WhySlide3 from './WhySlide3';

import '../css/why.css';
import '../css/my-swiper.css'

import logoSrc from '../img/logo.png';

const WhySwiper = (props) => (
  <div className="why-swiper-container">
    <div className="swiper-wrapper">
      <WhySlide index={props.index} lang={props.lang} />
      <WhySlide1 index={props.index} lang={props.lang} />
      <WhySlide2 index={props.index} lang={props.lang} />
      <WhySlide3 index={props.index} lang={props.lang} />
    </div>
    <div className='why-swiper-pagination swiper-pagination'>
    </div>
  </div>
);

class WhyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: undefined
    }
    this.handleSlideTrans = this.handleSlideTrans.bind(this);
    this.kek = this.kek.bind(this);
  }

  handleSlideTrans() {
    this.setState({index: this.swiper.realIndex});
  }

  kek(){
    this.props.setIndexOpen(0, false);
  }

  componentDidMount() {
    this.swiper = new Swiper('.why-swiper-container', {
      direction: 'vertical',
      speed: 1000,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.why-swiper-pagination',
        clickable: true,
      },
      on: {
        transitionEnd: this.handleSlideTrans
      }
    });
    setTimeout(this.handleSlideTrans, 100);
  }

  render() {
    return (
      <div className="why-page">
        <MyDelayLink to='/' el='trans-curtain' onClick={this.kek}>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </MyDelayLink>
        <LeftBar>
          <span><MyDelayLink to='/production' el='trans-curtain'>
            { this.props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
          </MyDelayLink></span>
        </LeftBar>
        <Splashes />
        <WhySwiper index={this.state.index} lang={this.props.lang} />

        <div className='trans-curtain trans-curtain-hidden'>
          <img src={logoSrc} alt='logo'/>
        </div>
      </div>
    ); 
  }
}

export default WhyPage;
