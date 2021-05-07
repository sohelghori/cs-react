
import { Button, Nav, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import { Carousel, CarouselItem } from 'react-bootstrap';

function MainSlider() {
  return (
        <div className="slider-wrapper">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://placehold.it/2000x550"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://placehold.it/2000x550"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://placehold.it/2000x550"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>    
   );
}


export default MainSlider;