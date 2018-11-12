import React from 'react';
import koryst_0 from '../img/k-0.min.png';

const WhySlide = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 0 ? "why-header why-header-active" : "why-header" }>
        <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3>
      </div>
      <div className="why-body">
        <div className={props.index === 0 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
          Ми хочемо бути на 100% впевненими<br/>
          у продуктах, які обираємо. А ти?
        </div>
        <div className={props.index === 0 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
          Як відповідальний виробник, компанія «Люстдорф» переконана – все на нашому столі чи навіть в
          сумці для швидкого перекусу має бути абсолютно безпечним, якісним та корисним для здоров’я
          людей і всієї планети.<br/>
          Ми турбуємося про наших споживачів:<br/>
          – про тих, хто любить змінювати смаки та експериментувати, про тих, хто не може пити коров’яче
          молоко і про тих, хто просто любить смачненьке. Тому й створили корисну альтернативу
          коров’ячого молока – рослинні напої, які ми ніжно називаємо «рослинне молоко».<br/>
          Ми першими в Україні розробили нову лінійку 100% здорових, натуральних, рослинних напоїв
          «Ідеаль Немолоко», які принесуть у твоє життя нові смаки та користь.<br/>
          Чи є щось більш натуральне та природне для нас, як не рослини?
        </div>
      </div>
    </div>
    <img className="why-img-center" src={koryst_0} alt="koryst_0" />
  </div>
);

export default WhySlide;