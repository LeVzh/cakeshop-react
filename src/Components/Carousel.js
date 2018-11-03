import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 
class DCarousel extends Component {

    renderCakes = () =>{
        const {data} = this.props
        let cakesImgs = null
        cakesImgs = data.map((imgRef, index) => {
            return  <div className="box">
                        <img className="cake-imgs" key={imgRef.id} src={imgRef.ref} />
                    </div>
          })
    
        return cakesImgs;
      }

    render() {
        return (
            
            <Carousel showThumbs={false} autoPlay={false} centerMode={true}>
                {this.renderCakes()}
            </Carousel>
        );
    }
}

export default DCarousel;