import { Row,Col,Container } from 'react-bootstrap';
import Testimonials from '../components/testimonial';

function Home() {
    return (
        <div>
           <section className="home-services-wrapper">
           <Row>
                <Col md={3}>
                    <div className="home-service-block">
                        <div className="home-service-content">
                            <div className="home-service-title">
                                <span class="home-service-count">01</span>
                                <h6>Lorem Ipsum is not</h6>
                                <h3>Contrary <br/>popular belief</h3>
                            </div>
                            <div className="home-service-text">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>   
                            </div>
                            <div className="home-service-readmore">
                                    <a href="#" class="home-service-more" >Read More</a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div className="home-service-block">
                        <div className="home-service-content">
                            <div className="home-service-title">
                                <span class="home-service-count">01</span>
                                <h6>Lorem Ipsum is not</h6>
                                <h3>Contrary <br/>popular belief</h3>
                            </div>
                            <div className="home-service-text">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>   
                            </div>
                            <div className="home-service-readmore">
                                    <a href="#" class="home-service-more" >Read More</a>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col md={3}>
                    <div className="home-service-block">
                        <div className="home-service-content">
                            <div className="home-service-title">
                                <span class="home-service-count">01</span>
                                <h6>Lorem Ipsum is not</h6>
                                <h3>Contrary <br/>popular belief</h3>
                            </div>
                            <div className="home-service-text">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>   
                            </div>
                            <div className="home-service-readmore">
                                    <a href="#" class="home-service-more" >Read More</a>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col md={3}>
                    <div className="home-service-block">
                        <div className="home-service-content">
                            <div className="home-service-title">
                                <span class="home-service-count">01</span>
                                <h6>Lorem Ipsum is not</h6>
                                <h3>Contrary <br/>popular belief</h3>
                            </div>
                            <div className="home-service-text">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>   
                            </div>
                            <div className="home-service-readmore">
                                    <a href="#" class="home-service-more" >Read More</a>
                            </div>
                        </div>
                    </div>
                </Col>
               
            </Row>

            </section>
            <section className="common-section experience-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="experience-year-warpper">
                                   <h3>10</h3> 
                             </div>   
                        </Col>
                        <Col md={6}>
                        </Col>
                        </Row>   
                </Container>    
            </section>

            <section className="common-section testimonial-section">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="home-testimonial-warpper">
                                <Testimonials />
                             </div>   
                        </Col>
                    </Row>   
                </Container>    
            </section>
            
        </div>    
    );
}
export default Home;