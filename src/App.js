import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import MainPage from './MainPage';
import WhyPage from './WhyPage';
import ProductsPage from './ProductsPage';

import splashLeft from './img/splash-left.png';
import splashRight from './img/splash-right.png';

import fb_logo from './img/fb-logo.png';
import ig_logo from './img/ig-logo.png';
import yt_logo from './img/yt-logo.png';

const Social = (props) => {
  return (
      <div className="social">
        <Link to='/idealnemoloko-react/'><img src={fb_logo} alt='fb logo' /></Link>
        <Link to='/idealnemoloko-react/'><img src={ig_logo} alt='fb logo' /></Link>
        <Link to='/idealnemoloko-react/'><img src={yt_logo} alt='fb logo' /></Link>
      </div>
  );
}

const LeftBar = (props) => {
  return (
    <div className='left-bar'>
      <span><Link to='/idealnemoloko-react/production'>ПРОДУКЦІЯ</Link></span>
      <span><Link to='/idealnemoloko-react/why'>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</Link></span>
    </div>
  );
};

const Header = (props) => (
  <div>
    <img className='splash-left' src={splashLeft} alt='milk splash'/>
    <img className='splash-right' src={splashRight} alt='milk splash'/>
    <LeftBar />
    <Social />
  </div>
);

const NotFound = (props) => (
  <div>
    404
  </div>
); 

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/idealnemoloko-react/' component={MainPage}/>
          <Route exact path='/idealnemoloko-react/why' component={WhyPage}/>
          <Route exact path='/idealnemoloko-react/production' component={ProductsPage}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
