import React from 'react';
import '../css/product-info.css';

import cardboard from '../img/cardboard.png';
const IMG_URL = 'https://res.cloudinary.com/syplemstudio/';

const markdown = (str) => {
  const arr = str.split("**");
  return (
    <span>
      { arr.map((span, index) => (
        index % 2 === 0 ? 
          <span key={ 'desc_in_' + index }>{span}</span> : 
          <span key={ 'desc_in_' + index }><b>{span}</b></span> ) )}
    </span>
  );
}

const MarkdownApplier = (props) => {
  return <span>{markdown(props.span)}<br/></span>
};

const ProcuctInfo = (props) => (
  <div className='swiper-slide'>
    <div className={props.isOpen ? 'info info-hidden' : 'info'}>
      <div className='info-header'>
        <h3>ПЕРШЕ УКРАЇНСЬКЕ «ІДЕАЛЬ НЕМОЛОКО»</h3>
      </div>

      <div className='info-body'>
        <h4 className='info-body-title'>
          { props.lang === 'ua' ? props.product.title : props.product.title_rus }
        </h4>
        <h5 className='info-body-subtitle'>
          { props.lang === 'ua' ? props.product.subtitle : props.product.subtitle_rus }
        </h5>
        <p className='info-body-description'>
          { props.lang === 'ua' ? props.product.content.map(
            (span, index) => <MarkdownApplier key={ 'desc_' + index } span={span} />
          ) : props.product.content_rus.map(
            (span, index) => <MarkdownApplier key={ 'desc_' + index } span={span} />
          )}
        </p>
        <h6 className='info-body-list-title'>
          { props.lang === 'ua' ? props.product.list_heading : props.product.list_heading_rus }
        </h6>
        <div className='info-body-list'>
          <table>
            <tbody>
              { props.lang === 'ua' ? props.product.about_list.map(
                (li, i) => (
                  <tr key={ "li" + i }>
                    <td>-</td>
                    <td>{li}</td>
                  </tr>
                )
              ) : props.recipe.product.about_list_rus.map(
                (li, i) => (
                  <tr key={ "li" + i }>
                    <td>-</td>
                    <td>{li}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <p className='info-body-finally'>
        { props.lang === 'ua' ? props.product.silly_comment : props.product.silly_comment_rus }
        </p>
      </div>

      <div className="info-footer">
        <div className="info-footer-table">
          <h4 className='info-footer-table-title'>
            { props.lang === 'ua' ? 'Поживна цінність продукту' : 'Питательная ценность продукта'}
          </h4>
          <div className='info-footer-table-head'>
            <div className='info-footer-table-col'>
              <h6>
                { props.lang === 'ua' ? 'Показник на 100г' : 'Показатель на 100г'}
              </h6>
            </div>
            <div className='info-footer-table-col'>
              <h6>Ідеаль Немолоко 2,5%</h6>
            </div>
          </div>
          <div className='info-footer-table-body'>
            <div className='info-footer-table-col'>
              <div>{ props.lang === 'ua' ? 'Калорійність' : 'Калорийность'}</div>
              <div>{ props.lang === 'ua' ? 'Білок' : 'Белки'}</div>
              <div>{ props.lang === 'ua' ? 'Вуглеводи' : 'Углеводы'}</div>
              <div>Холестерин</div>
            </div>
            <div className='info-footer-table-col'>
              <div>{props.product.calories}</div>
              <div>{props.product.proteins}</div>
              <div>{props.product.carbohydrates}</div>
              <div>{props.product.cholesterol}</div>
            </div>
          </div>
        </div>
        <div className="info-footer-weight">
          { props.product.small_cardboard_weight !== null && 
            <div>
              <div className="info-footer-weight-img">
                <img className="info-footer-weight-img-small" src={ cardboard } alt="cardboard" />
              </div>
              <div className="info-footer-weight-text">
                <span>{props.product.small_cardboard_weight}г</span>
              </div>
            </div>
          }
          { props.product.big_cardboard_weight !== null &&  <div>
              <div className="info-footer-weight-img">
                <img className="info-footer-weight-img-big" src={ cardboard } alt="cardboard" />
              </div>
              <div className="info-footer-weight-text">
                <span>{props.product.big_cardboard_weight}г</span>
              </div>
            </div>
          }
        </div>
      </div>
      <img 
        className="info-body-cereal-image"
        src={ IMG_URL + props.product.cereal_image }
        alt={'small_' + props.index}
      />
    </div>
  </div>
);

const ProcuctInfoSwiper = (props) => (
  <div id='info' className="swiper-container-info">
    <div className="swiper-wrapper">
    {props.products.map(
      (product,index) => (
        <ProcuctInfo 
          product={product}
          isOpen={props.isOpen}
          backClick={props.backClick}
          lang={props.lang}
          key={'slide-' + index}
        />
      )
    )}
    </div>
  </div>
);

export default ProcuctInfoSwiper;