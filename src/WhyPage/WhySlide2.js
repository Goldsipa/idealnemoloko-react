import React from 'react';
import koryst_2 from '../img/k-2.min.png';

const WhySlide2 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className="why-header"> <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3></div>
      <div className="why-body">
        <div className='why-body-title'>
          НАВІТЬ ПІД ЧАС ПОСТУ?
        </div>
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
    <img className="why-img-right" src={koryst_2} alt="koryst_2" />
  </div>
);

export default WhySlide2;