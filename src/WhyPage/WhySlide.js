import React from 'react';
import { WhySlideBodyUA, WhySlideBodyRU } from '../Locales';
import koryst_0 from '../img/k-0.min.png';

const WhySlide = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 0 ? "why-header why-header-active" : "why-header" }>
        <h3>{ props.lang === 'ua' ? 'ПРО «ІДЕАЛЬ НЕМОЛОКО»' : 'ПРО «ІДЕАЛЬ НЕМОЛОКО»' }</h3>
      </div>
      { props.lang === 'ua' ? <WhySlideBodyUA index={props.index} />
        : <WhySlideBodyRU index={props.index} /> }
    </div>
    <img className="why-img-center why-img-0" src={koryst_0} alt="koryst_0" />
  </div>
);

export default WhySlide;