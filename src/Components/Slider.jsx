import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//https://www.npmjs.com/package/react-slideshow-image

const Slider = () => {
    const images = [
        '/imgs/slider/slider1.jpg',
        '/imgs/slider/slider2.jpg',
        '/imgs/slider/slider3.jpg'
    ]

    const fadeProperties = {
        duration: 3500,
        canSwipe: false
    };

    return (
        <div>
          <div className="slide-container">
            <Slide {...fadeProperties}>
              <div className="each-fade">
                <div>
                  <img src={images[0]} alt="cat and dog cuddling"/>
                </div>
                <p><img className="logo" src="/imgs/petace-logo.jpg" alt="logo"/>
                 Pet Ace
                </p>
              </div>
              <div className="each-fade">
                <p>Furry friends find happiness</p>
                <div>
                  <img src={images[1]} alt="cat staring to the left"/>
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img src={images[2]} alt="green lizard with a red heart mark on its head"/>
                </div>
                <p>The scaly ones too</p>
              </div>
            </Slide>
          </div>
        </div>
    );
}

export default Slider;