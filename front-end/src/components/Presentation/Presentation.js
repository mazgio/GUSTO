import React from 'react';
import "./Presentation.css";
import styled from 'styled-components';
import logo from "../images/team-logo.png";
import { Link } from 'react-router-dom';

const Logo = styled.img`
width: 45%;
margin-top:45px
   text-align:center;
    padding:55px;

`;



const Presentation = () => {
    return (
        <>
            <Link to="/team" className='teamAbout' >  <Logo src={logo} />
            </Link>
            <div className='containerAbout'>
                <h2 className='containerPresentation'>About us</h2>
                <p className='textPresentation'>Gusto is a new start-up, who focus on capitalizing upon a perceived market demand by developing a viable product, service, or platform. Gusto is a startup born from the minds of a group of 4 young web developers,headquartered in Berlin but we are expanding throughout Germany.
                    The basic idea is to bring food culture to all people who love or do not love food and to introduce different culinary cultures.
                    <span> </span>
                </p>
            </div>

        </>

    );
};


export default Presentation;
