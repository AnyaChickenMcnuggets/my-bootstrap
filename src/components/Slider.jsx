import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={5000}>
        <img width={'100%'} height={900}
          className="d-block w-100"
          src="./img/one.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>View of the Sognefjord</h3>
          <p>1901 by Karl Paul Themistokles von Eckenbrecher</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img width={'100%'} height={900}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Fields with Blooming Poppies</h3>
          <p>1890 by Vincent van Gogh</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img width={'100%'} height={900}
          className="d-block w-100" 
          src="./img/two.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Giving Directions</h3>
          <p>
            by George Willis Pryce
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider