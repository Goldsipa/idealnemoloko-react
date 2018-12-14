import React from 'react';
import { WhySlide3BodyUA, WhySlide3BodyRU } from '../Locales';
import koryst_3 from '../img/k-3.min.png';
import cert from '../img/cert.png';
import cert1 from '../img/cert1.png';

class Certificate extends React.Component {
  fullscreen(e) {
    var modalEl = document.getElementsByClassName("why-certificate-modal")[this.props.index];
    modalEl.classList.toggle("why-certificate-modal-active");
  }

  render() {
    return (
      <div className={ this.props.slideIndex === 4 ? 'why-certificate why-certificate-active' : 'why-certificate'}>
        <img onClick={ this.fullscreen.bind(this) } src={ this.props.src } alt="certificate"/>
      </div>
    );
  }
}

const WhySlide3 = (props) => (
  <div className="swiper-slide">
    <div className="why-left">
      { props.lang === 'ua' ? <WhySlide3BodyUA index={props.index} />
        : <WhySlide3BodyRU index={props.index} /> }
      <Certificate src={ cert } index={ 0 } slideIndex={props.index} />
      <Certificate src={ cert1 } index={ 1 } slideIndex={props.index} />
    </div>
    <img className="why-img-center" src={koryst_3} alt="koryst_3" />
  </div>
);

export default WhySlide3;