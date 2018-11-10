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
      <div className="social" href='#'>
        <Link to='/'><img src={fb_logo} alt='fb logo' /></Link>
        <Link to='/'><img src={ig_logo} alt='fb logo' /></Link>
        <Link to='/'><img src={yt_logo} alt='fb logo' /></Link>
      </div>
  );
}

const LeftBar = (props) => {
  return (
    <div className='left-bar'>
      <span><Link to='/production'>ПРОДУКЦІЯ</Link></span>
      <span><Link to='/why'>ЧОМУ ІДЕАЛЬ НЕМОЛОКО</Link></span>
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
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/why' component={WhyPage}/>
          <Route exact path='/production' component={ProductsPage}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
