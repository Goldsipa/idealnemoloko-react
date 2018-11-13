import React from 'react';
import '../css/main.css';
import { MainBodyUA, MainHeaderUA, MainBodyRU, MainHeaderRU } from '../Locales';

class Main extends React.Component {
  render() {
    return (
      <div className={this.props.isOpen ? 'main main-hidden' : 'main'}>
        {this.props.lang === 'ua' ? <MainHeaderUA /> : <MainHeaderRU />}
        {this.props.lang === 'ua' ? <MainBodyUA /> : <MainBodyRU />}
      </div>
    );
  }
}

export default Main;