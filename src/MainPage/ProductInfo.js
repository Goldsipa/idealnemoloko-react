import React from 'react';
import '../css/product-info.css';

const ProcuctInfo = (props) =>(
  <div className={props.isOpen ? 'info info-hidden' : 'info'}>
    <div className="info-back" onClick={ props.isOpen ? props.backClick : undefined }></div>

    <div className='info-header'>
      <h3>ІДЕАЛЬ НЕМОЛОКО</h3>
    </div>

    <div className='info-body'>
      <h4 className='info-body-title' style={{color: props.product.title_subtitle_color}}>
        {props.product.title}
      </h4>
      <h5 className='info-body-subtitle' style={{color: props.product.title_subtitle_color}}>
        {props.product.subtitle}
      </h5>
      <p className='info-body-description'>
        {props.product.content}
      </p>
      <h6 className='info-body-list-title'>{props.product.list_heading}</h6>
      <ul className='info-body-list'>
        {props.product.about_list.map(
          (li, index) => <li key={ props.product.title + index }><span>{li}</span></li>
        )}
      </ul>
      <p className='info-body-finally'>{props.product.silly_comment}</p>
    </div>

    <div className="info-footer">
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
    
  </div>
);

export default ProcuctInfo;