import React from 'react';
import koryst_1 from '../img/k-1.min.png';

const WhySlide1 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className="why-header"> <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3></div>
      <div className="why-body">
        <h4 className='why-body-title'>
          ДЛЯ КОГО ЩЕ «ІДЕАЛЬ НЕМОЛОКО»?
        </h4>
        <div className='why-body-description' style={{width: '80%'}}>
          «Ідеаль Немолоко» корисне для всіх і кожного<br/>
          – для тих, хто любить пробувати нове<br/>
          - для тих, хто дотримується посту<br/>
          - для веганів, вегетаріанців, сироїдів<br/>
          - для тих, хто не переносить лактози або має алергією на білок коров&#39;ячого молока.<br/><br/>
          Для пікніка і домашнього затишку, до чаю і просто так, у каші та всюди, де тільки хочеться.<br/><br/>
          Це здоровий та корисний продукт, який можна і треба включати у свій щоденний раціон.
        </div>
      </div>
    </div>
    <img className="why-img-center" src={koryst_1} alt="koryst_1" />
  </div>
);

export default WhySlide1;