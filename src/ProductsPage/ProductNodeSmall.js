import React from 'react';
import { Link } from 'react-router-dom';

const IMG_URL = 'https://res.cloudinary.com/syplemstudio/';

class ProductNodeSmall extends React.Component {
  constructor(props) {
    super(props);

    this.kek = this.kek.bind(this);
  }

  kek(){
    this.props.setIndexOpen(this.props.index, true);
  }

  render() {
    if(this.props.product.image_small) {
      return (
        <div className='products-node'>
          <Link onClick={this.kek} to='/'>
            { this.props.product && this.props.product.image_small !== '' && 
            <img
              className='products-node-img-small'
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
    
    return (null);
  }
}

export default ProductNodeSmall;