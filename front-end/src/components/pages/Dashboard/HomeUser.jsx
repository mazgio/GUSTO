import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider.js";
import Logout from "../../Logout.jsx";
import styled from "styled-components";
import { HomeBusiness } from "./HomeBusiness.jsx";
import { HomeCustomer } from "./HomeCustomer.jsx";

const Name = styled.div`
  background: #fae6b1;
  padding: 10px 20px;
  margin: 0px;
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #31525b;
  position: relative;
`;

export const Dashboard = (props) => {
  const [firstName, setFirstName] = useState("");
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL +
          `/${currentUser.userType}/${currentUser._id}`
      );
      const parsedRes = await response.json();

      try {
        // If the request was successful...
        if (response.ok) {
          console.log("Server response", parsedRes);
          setFirstName(parsedRes.firstName);

          console.log("firstName", parsedRes.firstName);
          // If the request was unsuccessful...
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchUserData();
  }, [props.currentUserId, currentUser._id, currentUser.userType]);

  return (
    <div>
      <Name>
        <h2 id="greeting">Welcome {firstName}!</h2>
      </Name>
      {currentUser.userType !== "customerUsers" ? (
        <HomeBusiness />
      ) : (
        <HomeCustomer />
      )}
    </div>
  );
};
