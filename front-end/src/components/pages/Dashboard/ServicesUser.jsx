import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider.js";
import { HomeBusiness } from "./HomeBusiness.jsx";
import { HomeCustomer } from "./HomeCustomer.jsx";
import { ServicesBusiness } from "./ServicesBusiness.jsx";
import { ServicesCustomer } from "./ServicesCustomer.jsx";

export const Dashboard2 = (props) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL +
          `/${currentUser.userType}/${currentUser._id}`
      );
      const parsedRes = await response.json();
    };

    fetchUserData();
  }, [props.currentUserId, currentUser._id, currentUser.userType]);

  return (
    <div>
      {currentUser.userType !== "customerUsers" ? (
        <ServicesBusiness />
      ) : (
        <ServicesCustomer />
      )}
    </div>
  );
};
