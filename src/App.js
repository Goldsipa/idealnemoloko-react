import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './MainPage';
import ProductsPage from './ProductsPage';
import WhyPage from './WhyPage';
import RecipesPage from './RecipesPage';
import NotFound from './NotFound';

import productsBackup from './products-backup.json';
const API = 'http://idealnemoloko.com:8000/api/';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lang: 'ua',
      products: undefined,
      index: 0,
      isOpen: false
    }

    this.setLangRu = this.setLangRu.bind(this);
    this.setLangUa = this.setLangUa.bind(this);
    this.setIndexOpen = this.setIndexOpen.bind(this);
  }

  setLangRu() {
    this.setState({lang: 'ru'});
  }

  setLangUa() {
    this.setState({lang: 'ua'});
  }

  setIndexOpen(i, isOpen) {
    this.setState({
      index: i,
      isOpen: isOpen
    });
  }

  componentDidMount() {
    fetch(API)
      .then( response => response.json() )
      .then( data => this.setState({products: data}))
      .catch((err) => {  
        console.log('Fetch Error :-S', err);  
        this.setState({products: productsBackup});
      });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'
            render={(props) => (
              <MainPage
                lang={this.state.lang}
                products={this.state.products}
                setIndexOpen={this.setIndexOpen}
                index={this.state.index}
                isOpen={this.state.isOpen}
                setLangRu={this.setLangRu} 
                setLangUa={this.setLangUa} 
              />
            )}
          />
          <Route exact path='/production'
            render={(props) => (
              <ProductsPage
                lang={this.state.lang}
                products={this.state.products}
                setIndexOpen={this.setIndexOpen}
                setLangRu={this.setLangRu} 
                setLangUa={this.setLangUa} 
              />
            )}
          />
          <Route exact path='/why'
            render={(props) => (
              <WhyPage 
                lang={this.state.lang} 
                setIndexOpen={this.setIndexOpen}
                setLangRu={this.setLangRu} 
                setLangUa={this.setLangUa} 
              />
            )}
          />
          <Route exact path='/Recipes'
            render={(props) => (
            <RecipesPage 
              lang={this.state.lang} 
              setIndexOpen={this.setIndexOpen}
              setLangRu={this.setLangRu} 
              setLangUa={this.setLangUa} 
            />
            )}
          />
          <Route 
            render={(props) => <NotFound lang={this.state.lang} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
