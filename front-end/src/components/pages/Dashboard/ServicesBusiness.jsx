import React from "react";
import Cards from "../../Cards/Cards.js";
import styled from "styled-components";
import bannerBusiness from "../../images/grapes.jpg";

const Banner = styled.div`
  background-image: url(${bannerBusiness});
  background-repeat: no-repeat;
  background-attachment: fixed;
  border: none;
  margin-top: 19px;
  max-width: 100rem;
  height: 70vh;
  background-size: cover;
  @media screen and (max-width: 1300px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 0px;
    height: 64vh;
    background-size: contain;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    height: 54vh;
    background-size: contain;
  }
  @media screen and (max-width: 900px) {
    margin-top: 0px;
    height: 59vh;
    background-size: contain;
  }
  @media screen and (max-width: 700px) {
    margin-top: 0px;
    height: 39vh;
    background-size: contain;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0px;
    height: 27vh;
  } ;
`;

export const ServicesBusiness = () => {
  return (
    <div>
      <Banner />
      <Cards />
    </div>
  );
};
