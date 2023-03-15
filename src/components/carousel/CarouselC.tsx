import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img4 from "../../assets/img4.jpg";
import img2 from "../../assets/img2.jpg";
import img1 from "../../assets/img1.jpg";

export const CarouselC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Group of people holding hand together"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Group of people holding hand together</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
