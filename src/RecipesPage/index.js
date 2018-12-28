import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Header from '../Header';
import { Link } from 'react-router-dom';

import { SplashesNotMain } from '../Header';
import RecipesSlide from './RecipesSlide';

import '../css/recipes.css';
import '../css/my-swiper.css'

import logoSrc from '../img/logo.png';

const RECIPES = 'http://idealnemoloko.com:8000/recipes/';

const RecipesSwiper = (props) => (
  <div className="recipes-swiper-container">
    <div className="swiper-wrapper">
      {props.recipes.map(
        (recipe, index) => (
          <RecipesSlide
            key={ 'recipe' + index }
            recipe={recipe} 
            lang={props.lang}
          />
        )
      )}
    </div>
    <div className='recipes-swiper-pagination swiper-pagination'>
    </div>
  </div>
);

class RecipesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: undefined,
      recipes: undefined
    }
    this.handleSlideTrans = this.handleSlideTrans.bind(this);
    this.kek = this.kek.bind(this);
  }

  hasLoaded() {
    this.swiper = new Swiper('.recipes-swiper-container', {
      direction: 'vertical',
      speed: 1000,
      slidesPerView: 1,
      allowTouchMove: false,
      mousewheel: true,
      pagination: {
        el: '.recipes-swiper-pagination',
        clickable: true,
      },
      on: {
        transitionEnd: this.handleSlideTrans
      }
    });
    // setTimeout(this.handleSlideTrans, 100);
  }

  handleSlideTrans() {
    this.setState({index: this.swiper.realIndex});
  }

  kek(){
    this.props.setIndexOpen(0, false);
  }

  componentDidMount() {
    fetch(RECIPES)
      .then( response => response.json() )
      .then( data => { 
        this.setState({recipes: data});
        this.hasLoaded();
      })
      .catch((err) => {  
        console.log('Fetch Error :-S', err);  
        // this.setState({products: productsBackup});
      });
  }

  render() {
    return (
      <div className="recipes-page">
        <Link to='/' onClick={this.kek}>
          <img className="logo logo-not-main" src={logoSrc} alt='idealnemoloko logo' />
        </Link>
        <Header lang={this.props.lang} setLangRu={this.props.setLangRu} setLangUa={this.props.setLangUa} />
        <SplashesNotMain />
        { this.state.recipes && <RecipesSwiper
          index={this.state.index}
          recipes={this.state.recipes}
          lang={this.props.lang} />
        }

        {/* <div className='trans-curtain trans-curtain-hidden'>
          <img src={logoSrc} alt='logo'/>
        </div> */}
      </div>
    ); 
  }
}

export default RecipesPage;