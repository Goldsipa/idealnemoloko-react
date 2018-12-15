import React from 'react';
import { WhySlide2BodyUA, WhySlide2BodyRU } from '../Locales';
import koryst_2 from '../img/k-2.min.png';

const WhySlide2 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 2 ? "why-header why-header-active" : "why-header" }>
        <h3>{ props.lang === 'ua' ? 'НАВІТЬ ПІД ЧАС ПОСТУ?' : 'ДАЖЕ ВО ВРЕМЯ ПОСТА?' }</h3>
      </div>
      { props.lang === 'ua' ? <WhySlide2BodyUA index={props.index} />
        : <WhySlide2BodyRU index={props.index} /> }
    </div>
    <div className="why-img-right" style={{backgroundImage: `url(${koryst_2})`}} />
  </div>
);

export default WhySlide2;