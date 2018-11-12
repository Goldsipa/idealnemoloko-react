import React from 'react';
import koryst_1 from '../img/k-1.min.png';

const WhySlide1 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 1 ? "why-header why-header-active" : "why-header" }>
        <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3>
      </div>
      <div className="why-body">
        <h4 className={props.index === 1 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
          ДЛЯ КОГО ЩЕ «ІДЕАЛЬ НЕМОЛОКО»?
        </h4>
        <div className={props.index === 1 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
          «Ідеаль Немолоко» корисне для всіх і кожного<br/>
          <div></div>для тих, хто любить пробувати нове<br/>
          <div></div>для тих, хто дотримується посту<br/>
          <div></div>для веганів, вегетаріанців, сироїдів<br/>
          <div></div>для тих, хто не переносить лактози або має алергією<br/>
          на білок коров&#39;ячого молока.<br/><br/>
          Для пікніка і домашнього затишку, до чаю і просто так,<br/>
          у каші та всюди, де тільки хочеться.<br/><br/>
          Це здоровий та корисний продукт,<br/>
          який можна і треба включати у свій щоденний раціон.
        </div>
      </div>
    </div>
    <img className="why-img-center" src={koryst_1} alt="koryst_1" />
  </div>
);

export default WhySlide1;