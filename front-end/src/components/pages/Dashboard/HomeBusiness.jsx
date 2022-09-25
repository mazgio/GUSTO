import React, { useEffect, useState } from "react";
import Posts from "../../Posts/Posts.js";
import { getPosts } from "../../../actions/posts.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "../Home/Home.css";
import makeStyles from "./styles";
import Contact from "../Contact/Contact";
import {
  Paper,
  Divider,
  Typography,
  AppBar,
  Container,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ContainerSearch from "../../../SearchPage.js";
import products from "../../images/products.jpg";

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
      <Container maxWidth="lg">
        <div position="static" color="inherit">
          <div className="flexBusiness">
            <img className="businessImg" src={products} alt="products" />
            <div
              className="servicesTitle"
              style={{ width: "50%", alignItems: "center" }}
              variant="h2"
            >
              Gusto´s Products
            </div>
          </div>
        </div>

        <div className="services-container">
          <ThemeProvider theme={theme}>
            <ContainerSearch />
          </ThemeProvider>
        </div>
        <Contact />
      </Container>
    </div>
  );
};
