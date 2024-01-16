import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import gambar1 from '../img/pexels-lisa-fotios-1107717.jpg';
import gambar2 from '../img/pexels-pixabay-462162.jpg'; // Replace with the actual image URL
import gambar3 from '../img/pexels-ákos-szabó-440731.jpg'; // Replace with the actual image URL

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='carousel-image' src={gambar1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-image' src={gambar2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-image' src={gambar3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
