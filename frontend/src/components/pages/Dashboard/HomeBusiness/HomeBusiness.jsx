import React, { useEffect, useState } from "react";
import Posts from "../../../Posts/Posts.js";
import { getPosts } from "../../../../actions/posts.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Home/Home.css";
import makeStyles from "../styles.js";
import Contact from "../../Contact/Contact.js";
import {
  Paper,
  Divider,
  Typography,
  AppBar,
  Container,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ContainerSearch from "../../../../SearchPage.js";
import products from "../../../images/products.jpg";
import "./HomeBusiness.css";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 10px;
`;

const ContactContainer = styled.div`
  width: 100%;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa101",
      contrastText: "#31525b",
    },
  },
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const HomeBusiness = () => {
  const classes = makeStyles();

  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  return (
    <div style={{ margin: "10px" }} className="services">
      <Container maxWidth="xm">
        <div position="static" color="inherit">
          <div className="flexBusiness">
            <div className="imageContainer">
              <img className="businessImg" src={products} alt="products" />
              <div className="overlayText">
                <div className="servicesTitle" variant="h2">
                  Gusto´s Products
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-container">
          <StyledContainer>
            <ThemeProvider theme={theme}>
              <ContainerSearch />
            </ThemeProvider>
          </StyledContainer>
        </div>
        <ContactContainer>
          <Contact />
        </ContactContainer>
      </Container>
    </div>
  );
};
