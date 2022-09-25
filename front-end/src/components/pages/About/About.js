import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../Modal/modal.js';
import { GlobalStyle } from './globalStyles.js';
import Presentation from "../../Presentation/Presentation.js";
import "./About.css";



const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
height: 100vh;
background-color:#31525b;
@media screen and (max-width: 315px){
 height:110vh;
};
@media screen and (max-width: 295px){
  height:120vh;
 };
`;

const Button = styled.button`
position: relative;
bottom:30px;
width:80%;
min-width: 100px;
padding:8px 12px;
border-radius: 4px;
border: none;
background-color: #ffa101;
color:  #31525b;
font-size: 18px;
cursor: pointer;
@media screen and (max-width: 444px){
  position: relative;
 bottom:2rem;
 };
 @media screen and (max-width: 414px){
  position: relative;
 bottom:17rem;
 };
`;

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Presentation />
        <Button onClick={openModal}>More about us</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default About;;