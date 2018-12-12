import React from 'react';
import { WhySlide2BodyUA, WhySlide2BodyRU } from '../Locales';
import koryst_2 from '../img/k-2.min.png';

const WhySlide2 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 3 ? "why-header why-header-active" : "why-header" }>
        <h3>{ props.lang === 'ua' ? 'ЧОМУ ІДЕАЛЬ НЕМОЛОКО' : 'ПОЧЕМУ ІДЕАЛЬ НЕМОЛОКО' }</h3>
      </div>
      { props.lang === 'ua' ? <WhySlide2BodyUA index={props.index} />
        : <WhySlide2BodyRU index={props.index} /> }
    </div>
    <img className="why-img-right" src={koryst_2} alt="koryst_2" />
  </div>
);

export default WhySlide2;