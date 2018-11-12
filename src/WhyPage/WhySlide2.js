import React from 'react';
import koryst_2 from '../img/k-2.min.png';

const WhySlide2 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 2 ? "why-header why-header-active" : "why-header" }>
        <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3>
      </div>
      <div className="why-body">
        <div className={props.index === 2 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
          НАВІТЬ ПІД ЧАС ПОСТУ?
        </div>
        <div className={props.index === 2 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
          <br/>
          Звичайно!<br/>
          Під час посту треба утримуватись від продуктів<br/>
          тваринного походження (м&#39;яса, риби, молока та яєць).<br/><br/>
          Але аж ніяк не нехтувати рослинами!<br/>
          «Ідеаль Немолоко» – це 100% рослинний напій без лактози,<br/>
          казеїну, трансжирів, холестерину, ГМО та доданого цукру.<br/><br/>
          Натомість, у ньому є вітаміни групи В в ідеальному співвідношенні,<br/>
          як найкращі «ліки» від стресу, а ще необхідний запас клітковини –<br/>
          джерело здоров’я, що регулює обмінні процеси та наповнює енергією.
        </div>
      </div>
    </div>
    <img className="why-img-right" src={koryst_2} alt="koryst_2" />
  </div>
);

export default WhySlide2;