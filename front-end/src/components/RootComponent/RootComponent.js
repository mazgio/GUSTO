import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@material-ui/core";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import iceCream from "../images/ice-cream.jpg";

const StyledRootComponent = styled.div`
`;

const StyledCarousel = styled(Carousel)`
  margin: 30px 0;

  .slider-img {
    width: 100%;
    height: 94vh;
    object-fit: cover;
  }

  .control-dots {
    position: absolute;
    bottom: 0;
    margin: 5px 0;
    padding: 0;
    text-align: center;
    width: 100%;
    z-index: 1;
  }

  @media screen and (max-width: 900px) {
    .slider-img {
      height: 40vh;
    }
  }

  @media screen and (max-width: 600px) {
    .slider-img {
      height: 40vh;
    }
  }

  @media screen and (max-width: 400px) {
    .slider-img {
      height: 30vh;
    }
  }

  @media screen and (max-width: 300px) {
    .slider-img {
      height: 30vh;
    }
  }
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const RootComponent = () => {
  return (
    <StyledRootComponent>
      <StyledCarousel showArrows={true} showThumbs={false} autoPlay autoPlaySpeed={3000} infiniteLoop={true}>
        <HomeImage src={image1} alt="" />
        <HomeImage src={image2} alt="" />
        <HomeImage src={image3} alt="" />
        <HomeImage src={image4} alt="" />
        <HomeImage src={image5} alt="" />
        <HomeImage src={iceCream} alt="" />
      </StyledCarousel>
    </StyledRootComponent>
  );
};

export default RootComponent;
