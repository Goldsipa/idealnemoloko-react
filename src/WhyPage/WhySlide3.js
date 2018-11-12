import React from 'react';
import koryst_3 from '../img/k-3.min.png';

const WhySlide3 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      <div className={props.index === 3 ? "why-header why-header-active" : "why-header" }>
        <h3>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</h3>
      </div>
      <div className="why-body">
        <div className={props.index === 3 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
          А ТОЧНО НЕмолоко?
        </div>
        <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
          <br/>
          Знак V-LABEL Vegan від<br/>
          Європейської вегетаріанської спілки<br/>
          (центральний офіс в Швейцарії) підтверджує,<br/>
          що це на 100% рослинний продукт.<br/><br/>

          А ти вже п’єш «ІДЕАЛЬ НЕМОЛОКО»?<br/>
          Шукай нас у Facebook або Instagram<br/>
          і ділися враженнями та побажаннями!<br/>
        </div>
      </div>
    </div>
    <img className="why-img-center" src={koryst_3} alt="koryst_3" />
  </div>
);

export default WhySlide3;