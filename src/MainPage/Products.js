import React from 'react';
import '../css/products.css';
import '../css/my-swiper.css';

const IMG_URL = 'https://res.cloudinary.com/syplemstudio/';

const SwiperSlideRight = (props) => {
  return (
    <div className="swiper-slide-right">
      <div 
        className={ "swiper-slide-right-title" + (props.isOpen ? " swiper-slide-right-title-hidden" : "")}
        onClick={props.isOpen ? undefined : props.click}
      >
        - {props.product.title} -
      </div>
      <div 
        className={ "swiper-slide-right-img" + (props.isOpen ? " swiper-slide-right-img-hidden" : "")}
        onClick={props.isOpen ? undefined : props.click}
      >
        <HandleImg
          src={ IMG_URL + props.product.image }
          alt={'small_' + props.index}
          hasLoaded={props.hasLoaded}
        />
      </div>
    </div>
  );
}

class HandleImg extends React.Component {
  constructor(props){
    super(props);

    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(e) {
    const parentNode = document.getElementById('products');
    const imgElements = parentNode.querySelectorAll("img");

    function isComplete(nList) {
      for (let i = 0; i < nList.length; i++) {
        if(!nList[i].complete) return false;
      }
      return true;
    }

    const verdict = isComplete(imgElements);
    if(verdict) this.props.hasLoaded();
  }

  render() {
    return (
      <img
        src={ this.props.src }
        alt={ this.props.alt }
        onLoad={this.handleImageChange}
      />
    );
  }
}

const SwiperSlide = (props) => {
  let bgImg = {backgroundImage: "radial-gradient(circle, " + props.product.inner_gradient_color + ", " + props.product.inner_gradient_color + ", " + props.product.outer_gradient_color + ", " + props.product.outer_gradient_color + ")"}
  return (
    <div className={"swiper-slide"} style={{backgroundColor: props.product.outer_gradient_color}}>
      <div className="swiper-slide-left" style={bgImg}>
        <HandleImg
          src={ IMG_URL + props.product.cereal_image }
          alt={'small_' + props.index}
          hasLoaded={props.hasLoaded}
        />
      </div>
      <SwiperSlideRight 
        index={props.index}
        product={props.product}
        click={props.click}
        isOpen={props.isOpen}
        hasLoaded={props.hasLoaded}
      />
    </div>
  );
}

class Products extends React.Component {
  render() {
    return (
      <div id='products' className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.products.map(
            (product,index) => (
              <SwiperSlide
                key={ 'product' + index }
                index={index}
                product={product} 
                click={this.props.click}
                isOpen={this.props.isOpen}
                hasLoaded={this.props.hasLoaded}
              />
            )
          )}
        </div>
        <div 
          className={ this.props.isOpen ? 'swiper-pagination swiper-pagination-bullets bullets-hidden' : 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets' }>
        </div>
        
      </div>
    );
  }
}

export default Products;