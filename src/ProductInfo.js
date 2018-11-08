import React from 'react';
import './css/product-info.css';

const ProcuctInfo = (props) =>(
  <div className='info'>
    <div className='info-header'>
      <h3>{props.product.name}</h3>
    </div>
    <div className='info-body'>
      <h4 className='info-body-title'>{props.product.title}</h4>
      <h5 className='info-body-subtitle'>{props.product.subtitle}</h5>
      <p className='info-body-description'>
        {props.product.description}
      </p>
      <h6 className='info-body-list-title'>{props.product.list_title}</h6>
      <ul className='info-body-list'>
        {props.product.list.map(
          (li, index) => <li key={ props.product.title + index }><span>{li}</span></li>
        )}
      </ul>
      <p className='info-body-finally'>{props.product.finally}</p>
    </div>
    <div className="info-footer">
      <h4 className='info-footer-table-title'>Поживна цінність продукту</h4>
      <div className='info-footer-table-head'>
        <div className='info-footer-table-col'>
          <h6>Показник на 100г</h6>
        </div>
        <div className='info-footer-table-col'>
          <h6>Ідеаль Немолоко 2,5%</h6>
        </div>
      </div>
      <div className='info-footer-table-body'>
        <div className='info-footer-table-col'>
          <div>Калорійність</div>
          <div>Білок</div>
          <div>Вуглеводи</div>
          <div>Холестерин</div>
        </div>
        <div className='info-footer-table-col'>
          <div>{props.product.cal}</div>
          <div>{props.product.protein}</div>
          <div>{props.product.carbs}</div>
          <div>{props.product.cholest}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ProcuctInfo;