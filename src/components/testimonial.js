import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="http://placehold.it/100x100" />
          <p className="legend2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
        </div>
        <div>
          <img src="http://placehold.it/100x100" />
          <p className="legend1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
        </div>
        <div>
          <img src="http://placehold.it/100x100" />
          <p className="legend2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
        </div>
      </Carousel>
    );
  }
}