import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './css/main.css';

class Main extends Component {

  constructor(props) {
    super(props)
  }

  getSnapshotBeforeUpdate() {
    if(this.props.currentCategory === 'married')
      this.slider.slickGoTo(0)
    if(this.props.currentCategory === 'children')
      this.slider.slickGoTo(3)
    if(this.props.currentCategory === 'corporative')
      this.slider.slickGoTo(6)
    if(this.props.currentCategory === 'design')
      this.slider.slickGoTo(9)
    if(this.props.currentCategory === 'capcake')
      this.slider.slickGoTo(12)
    if(this.props.currentCategory === 'other')
      this.slider.slickGoTo(15)
  }

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
      autoplay: false,
      arrows: false,
      accessibility: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    
    return (
      <div className="main">
        <div className="post-header-m"> 
        <h1 className='main-title'>Мои работы</h1>           
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.renderCakes()}
        </Slider> 
          <div className="border" >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;