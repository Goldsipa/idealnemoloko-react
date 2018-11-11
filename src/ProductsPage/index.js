import React from 'react';
import { Link } from 'react-router-dom';

import logoSrc from '../img/logo.png';
import bg from '../img/im-bg.png';

const stubDivStyle = {
  height: '100%',
  width: '100%',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  textAlign: 'center'
}

const messageStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  margin: 0,
  fontFamily: 'LEngineer-Regular',
  fontSize: '6vh',
  WebkitFontSmoothing: 'antialiased',
  color: '#ffffff',
  transform: 'translateX(-50%) translateY(-50%)'
}

class ProductsPage extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Link to='/idealnemoloko-react/'><img className="logo" src={logoSrc} alt='idealnemoloko logo' /></Link>
        <div style={stubDivStyle}>
          <h3 style={messageStyle}>Сторінка у розробці</h3>
        </div>
      </div>
    );
  }
}

export default ProductsPage;