import React from 'react';
import koryst_3 from '../img/k-3.min.png';

const WhySlide3 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className="why-header"> <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3></div>
      <div className="why-body">
        <div className='why-body-title'>
          А ТОЧНО НЕмолоко?
        </div>
        <div className='why-body-description' style={{width: '50%'}}>
          Знак V-LABEL Vegan від Європейської вегетаріанської спілки (центральний офіс в Швейцарії)
          підтверджує, що це на 100% рослинний продукт.<br/><br/>

          А ти вже п’єш «ІДЕАЛЬ НЕМОЛОКО»? Шукай нас у Facebook або Instagram і ділися враженнями та
          побажаннями!
        </div>
      </div>
    </div>
    <img className="why-img-center" src={koryst_3} alt="koryst_3" />
  </div>
);

export default WhySlide3;