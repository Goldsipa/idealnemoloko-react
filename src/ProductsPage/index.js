import React from 'react';
import { Link } from 'react-router-dom';
import { LeftBar } from '../Header';
import { MyDelayLink } from '../DelayLink';

import '../css/products-page.css';
import prodSplash from '../img/production-splash.png';
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
        <MyDelayLink onClick={this.kek} to='/idealnemoloko-react/' el='trans-curtain'>
          { this.props.product && <img src={ IMG_URL + this.props.product.image_for_product_page } alt='grechaneProd' /> }
        </MyDelayLink>
        <Link onClick={this.kek} to='/idealnemoloko-react/'>
          <h4 className='products-node-heading'>ІДЕАЛЬ НЕМОЛОКО</h4>
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
        <MyDelayLink to='/idealnemoloko-react/' el='trans-curtain' onClick={this.kek}>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </MyDelayLink>
        <LeftBar>
          <span><MyDelayLink to='/idealnemoloko-react/why' el='trans-curtain'>
            { this.props.lang === 'ua' ? 'ЧОМУ ІДЕАЛЬ НЕМОЛОКО' : 'ПОЧЕМУ ІДЕАЛЬ НЕМОЛОКО'}
          </MyDelayLink></span>
        </LeftBar>
        <img className='prod-splash' src={prodSplash} alt='milk-splash' />
        { this.props.products && 
          <ProductsContainer
            products={ this.props.products } 
            lang={this.props.lang}
            setIndexOpen={this.props.setIndexOpen}
          />}

        <Contacts />

        <div className="trans-curtain trans-curtain-hidden">
          <img src={logoSrc} alt='logo'/>
        </div>
      </div>
    );
  }
}

export default ProductsPage;