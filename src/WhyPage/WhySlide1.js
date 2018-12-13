import React from 'react';
import { WhySlide1BodyUA, WhySlide1BodyRU } from '../Locales';
import koryst_1 from '../img/k-1.min.png';

const WhySlide1 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      { props.lang === 'ua' ? <WhySlide1BodyUA index={props.index} />
        : <WhySlide1BodyRU index={props.index} /> }
    </div>
    <img className="why-img-center" src={koryst_1} alt="koryst_1" />
  </div>
);

export default WhySlide1;