import React from 'react';
import { WhySlide3BodyUA, WhySlide3BodyRU } from '../Locales';
import koryst_3 from '../img/k-3.min.png';

const WhySlide3 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 4 ? "why-header why-header-active" : "why-header" }>
        <h3>{ props.lang === 'ua' ? 'ЧОМУ ІДЕАЛЬ НЕМОЛОКО' : 'ПОЧЕМУ ІДЕАЛЬ НЕМОЛОКО' }</h3>
      </div>
      { props.lang === 'ua' ? <WhySlide3BodyUA index={props.index} />
        : <WhySlide3BodyRU index={props.index} /> }
    </div>
    <img className="why-img-center" src={koryst_3} alt="koryst_3" />
  </div>
);

export default WhySlide3;