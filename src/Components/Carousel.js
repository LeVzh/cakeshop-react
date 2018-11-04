import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 
class DCarousel extends Component {

    renderCakes = () =>{
        const {data} = this.props
        let cakesImgs = null
        cakesImgs = data.map((imgRef) => {
            return  <div className="box">
                        <img className="cake-imgs" key={imgRef.id} src={imgRef.ref} />
                        <p className="legend">{imgRef.legend}</p>
                    </div>
          })
    
        return cakesImgs;
      }

    render() {
        return (
            
            <Carousel showThumbs={false} autoPlay={true} centerMode={true} centerSlidePercentage={34} showStatus={false}
            showIndicators={false} width="753px" stopOnHover={true}> 
                {this.renderCakes()}
            </Carousel>
        );
    }
}

export default DCarousel;