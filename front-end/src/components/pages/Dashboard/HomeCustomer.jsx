import React, { useEffect, useState } from "react";
import { getPosts } from "../../../actions/posts.js";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "../Home/Home.css";
import { AppBar, Container, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ContainerSearch from "../../../SearchPage.js";

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

export const HomeCustomer = () => {

  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);
  return (
    <div style={{ margin: "10px" }} className="services">
      <Container maxWidth="lg">
        <Typography
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#ffa101",
          }}
          variant="h2"
        >
          Products
        </Typography>
        <AppBar position="static" color="inherit"></AppBar>
        <div className="services-container">
          <ThemeProvider theme={theme}>
            <ContainerSearch />
          </ThemeProvider>
        </div>
      </Container>
    </div>
  );
};
