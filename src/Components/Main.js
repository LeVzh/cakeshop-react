import React, { Component } from 'react';

import DCarousel from './Carousel'
import './css/main.css';

class Main extends Component {

  getCakes = () =>{
    return this.props.data
  }
  
  render() {
    return (
      <div className="main">
        <div className="post-header-m">            

          <DCarousel data={this.getCakes()}></DCarousel>
            
          
          
          
          <div className="border">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;