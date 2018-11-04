import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './css/main.css';

class Main extends Component {

  renderCakes = () =>{
    const {data} = this.props
    let cakesImgs = null
    cakesImgs = data.map((imgRef) => {
        return  <div className="box">
                    <img className="cake-imgs" key={imgRef.id} src={imgRef.ref} />
                </div>
      })

    return cakesImgs;
  }
  
  render() {
    const settings = {
      
      autoplay: true,
      arrows: false,
      accessibility: false,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      fade: false
    };
    return (
      <div className="main">
        <div className="post-header-m">            
        <Slider {...settings}>
          {this.renderCakes()}
        </Slider>
          
            
          
          
          
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