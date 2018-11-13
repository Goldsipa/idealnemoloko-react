import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import MainPage from './MainPage';
import WhyPage from './WhyPage';
import ProductsPage from './ProductsPage';
import NotFound from './NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lang: 'ua'
    }

    this.setLangRu = this.setLangRu.bind(this);
    this.setLangUa = this.setLangUa.bind(this);
  }

  setLangRu() {
    this.setState({lang: 'ru'});
  }

  setLangUa() {
    this.setState({lang: 'ua'});
  }

  render() {
    return (
      <div>
        <Header lang={this.state.lang} setLangRu={this.setLangRu} setLangUa={this.setLangUa}/>
        <Switch>
          <Route exact path='/idealnemoloko-react/'
            render={(props) => <MainPage lang={this.state.lang} />}
          />
          <Route exact path='/idealnemoloko-react/why'
            render={(props) => <WhyPage lang={this.state.lang} />}
          />
          <Route exact path='/idealnemoloko-react/production' component={ProductsPage}/>
          <Route 
            render={(props) => <NotFound lang={this.state.lang} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
