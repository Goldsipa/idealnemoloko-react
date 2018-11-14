import React from 'react';
import { Link } from 'react-router-dom';

import products from '../MainPage/products.json';
import '../css/products-page.css';
import prodSplash from '../img/production-splash.png';
import lustodorf from '../img/lustodorf.png';
import logoSrc from '../img/logo.png';
import grechaneProd from '../img/grechane-prod.png';

const Contacts = (props) => (
  <div className='contacts'>
    <div className='contacts-img'>
      <img src={lustodorf} alt='Люстдорф' />
    </div>
    <div className='contacts-text'>
      <p>
        Україна, 03039, м. Київ, вул. Саперно-Слобідська, 25<br/>
        тел.: +380 (44) 569-49-08<br/>
        ТОВ «Люстдорф»
      </p>
    </div>
  </div>
);

const ProductNode = (props) => (
  <div className='products-node'>
    <img src={grechaneProd} alt='grechaneProd' />
    <h4 className='products-node-heading'>ІДЕАЛЬ НЕМОЛОКО</h4>
    <h5 className='products-node-title'>
      { props.lang === 'ua' ? props.product.title : props.product.title_rus }
    </h5>
    <p className='products-node-subtitle'>
      { props.lang === 'ua' ? props.product.subtitle : props.product.subtitle_rus }
    </p>
  </div>
);

const ProductsContainer = (props) => (
  <div className='products-container'>
    {props.products.map(
      (product, index) => <ProductNode key={ product.title + index } product={product} lang={props.lang}/>
    )}
  </div>
);

class ProductsPage extends React.Component {
  render() {
    return (
      <div className='products-page'>
        <Link to='/idealnemoloko-react/'>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </Link>
        <img className='prod-splash' src={prodSplash} alt='milk-splash' />

        { this.props.products && <ProductsContainer products={ this.props.products } lang={this.props.lang}/>}

        <Contacts />
      </div>
    );
  }
}

export default ProductsPage;