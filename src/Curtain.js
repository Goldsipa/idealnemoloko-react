import React from 'react';
import './css/curtain.css'
import leaves from './img/leaves.png';

class Curtain extends React.Component {
  render() {
    return (
      <div className="curtain">
        <div className='curtain-glow'></div>
        <img className='leaves' src={leaves} alt='leaves'/>
      </div>
    );
  }
}

export default Curtain;