import React from 'react';
import "./Presentation.css";
import styled from 'styled-components';
import logo from "../images/team-logo.png";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 65%;
  text-align: center;
  padding: 62px;
`;

const TextPresentation = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const MoreAboutLink = styled(Link)`
  color: #f3a12b;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;
  transform-origin: center; /* Specify the transform origin */

  &:hover {
    color: #ffcc00; 
    transform: perspective(100px) rotateX(5deg);
  }
`;


const Presentation = ({ children }) => {
  return (
    <Container>
      <Logo src={logo} />
      <TextPresentation className='textPresentation'>Gusto is a new start-up, focused on capitalizing upon a perceived market demand by developing a viable product, service, or platform. Gusto is a startup born from the mind of <MoreAboutLink to='/team'>Giorgio Mazzuca</MoreAboutLink>, a young web developer headquartered in Berlin, but expanding throughout Germany. The basic idea is to bring food culture to all people who love or do not love food and to introduce different culinary cultures.
      </TextPresentation>
      {children}
    </Container>

  );
};


export default Presentation;
