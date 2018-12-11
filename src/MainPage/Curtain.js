import React from 'react';
import '../css/curtain.css'
import leaves from '../img/leaves.png';

class Curtain extends React.Component {
  render() {
    return (
      <div className={this.props.isOpen ? 'curtain curtain-hidden' : 'curtain'}>
        <img className='leaves' src={leaves} alt='leaves'/>
      </div>
    );
  }
}

export default Curtain;