import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "../Nav";
import './Brazil.css'
import {Carousel, Jumbotron} from "react-bootstrap";
import image1 from './brazil_images/1.1.png'
import image2 from './brazil_images/1.2.png'
import image3 from './brazil_images/2.1.png'


function Brazil(){
    return(
        <div className="brazil">
            <div className="brazil-background">
                <div className="container">
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image1}
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
                                src={image2}
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
                                src={image3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="brazil-heading">
                <h1>Welcome to Brazil</h1>
                <p>Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. At 8.5 million square kilometers and with over 211 million people, Brazil is the world's fifth-largest country by area and the sixth most populous.</p>

            </div>

            <Nav/>



        </div>
    )
}
export default Brazil