import React from 'react';
import Swiper from 'swiper';
import { LeftBar } from '../Header';
import { Link } from 'react-router-dom';
// import { MyDelayLink } from '../DelayLink';

import { SplashesNotMain } from '../Header';
import WhySlideVideo from './WhySlideVideo';
import WhySlide from './WhySlide';
import WhySlide1 from './WhySlide1';
import WhySlide2 from './WhySlide2';
import WhySlide3 from './WhySlide3';

import '../css/why.css';
import '../css/my-swiper.css'

import logoSrc from '../img/logo.png';
import cert from '../img/cert.png';
import cert1 from '../img/cert1.png';

const WhySwiper = (props) => (
  <div className="why-swiper-container">
    <div className="swiper-wrapper">
      <WhySlideVideo index={props.index} />
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

  fullscreen(e) {
    e.target.parentNode.classList.toggle("why-certificate-modal-active");
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
        <Link to='/' onClick={this.kek}>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </Link>
        <LeftBar>
          <span><Link to='/production'>
            { this.props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
          </Link></span>
        </LeftBar>
        <SplashesNotMain />
        <WhySwiper index={this.state.index} lang={this.props.lang} />

        {/* <div className='trans-curtain trans-curtain-hidden'>
          <img src={logoSrc} alt='logo'/>
        </div> */}
        <div className="why-certificate-modal">
          <div onClick={ this.fullscreen.bind(this) }>
            <img src={ cert } alt="certificate"/>
          </div>
        </div>
        <div className="why-certificate-modal">
          <div onClick={ this.fullscreen.bind(this) }>
            <img src={ cert1 } alt="certificate"/>
          </div>
        </div>
      </div>
    ); 
  }
}

export default WhyPage;