import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        // showIndicators={false}
        showArrows={false}
        showThumbs={false}
        interval={1500}
      >
        <div>
          <img src={img1} alt="image1" />
          <p className="legend">FullStack</p>
        </div>
        <div>
          <img src={img2} alt="image1" />
          <p className="legend">Peer- to -Peer -Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
