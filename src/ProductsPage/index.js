import React from 'react';
import { Link } from 'react-router-dom';
import { LeftBar } from '../Header';
// import { MyDelayLink } from '../DelayLink';

import '../css/products-page.css';
import { SplashesNotMain } from '../Header';
import lustodorf from '../img/lustodorf.png';
import logoSrc from '../img/logo.png';

const IMG_URL = 'https://res.cloudinary.com/syplemstudio/';

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

class ProductNode extends React.Component {
  constructor(props) {
    super(props);

    this.kek = this.kek.bind(this);
  }

  kek(){
    this.props.setIndexOpen(this.props.index, true);
  }

  render() {
    return (
      <div className='products-node'>
        <Link onClick={this.kek} to='/'>
          { this.props.product && this.props.product.image_for_product_page !== '' && 
          <img
              className='products-node-img'
              src={ IMG_URL + this.props.product.image_for_product_page }
              alt={this.props.product.title} 
            /> 
          }
          { this.props.product && this.props.product.image_small !== '' && 
          <img
              className='products-node-img'
              src={ IMG_URL + this.props.product.image_small }
              alt={this.props.product.title}
            /> 
          }
        </Link>
        <Link onClick={this.kek} to='/'>
          <h4 className='products-node-heading'>«ІДЕАЛЬ НЕМОЛОКО»</h4>
          <h5 className='products-node-title'>
            { this.props.lang === 'ua' ? this.props.product.title : this.props.product.title_rus }
          </h5>
          <p className='products-node-subtitle'>
            { this.props.lang === 'ua' ? this.props.product.subtitle : this.props.product.subtitle_rus }
          </p>
        </Link>
      </div>
    )
  }
}

const ProductsContainer = (props) => (
  <div className='products-container'>
    {props.products.map(
      (product, index) => (
        <ProductNode
          key={ product.title + index }
          product={product}
          lang={props.lang}
          index={index}
          setIndexOpen={props.setIndexOpen}
        />
      )
    )}
  </div>
);

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.kek = this.kek.bind(this);
  }
  
  kek(){
    this.props.setIndexOpen(0, false);
  }

  render() {
    return (
      <div className='products-page'>
        <Link to='/' onClick={this.kek}>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </Link>
        <LeftBar>
          <span><Link to='/why'>
            { this.props.lang === 'ua' ? 'ПРО «ІДЕАЛЬ НЕМОЛОКО»' : 'ПРО «ІДЕАЛЬ НЕМОЛОКО»'}
          </Link></span>
          <span><Link to='/production'>
            { this.props.lang === 'ua' ? 'ПРОДУКЦІЯ' : 'ПРОДУКЦИЯ'}
          </Link></span>
          <span><Link to='/recipes'>
            { this.props.lang === 'ua' ? 'РЕЦЕПТИ' : 'РЕЦЕПТЫ'}
          </Link></span>
        </LeftBar>
        <SplashesNotMain />
        { this.props.products && 
          <ProductsContainer
            products={ this.props.products } 
            lang={this.props.lang}
            setIndexOpen={this.props.setIndexOpen}
          />}

        <Contacts />

        {/* <div className="trans-curtain trans-curtain-hidden">
          <img src={logoSrc} alt='logo'/>
        </div> */}
      </div>
    );
  }
}

export default ProductsPage;