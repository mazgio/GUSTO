import React, { useState, useEffect } from "react";

export const Dashboard = (props) => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL +
          `/customerUsers/${props.currentUserId}`
      );
      const parsedRes = await response.json();

      try {
        // If the request was successful...
        if (response.ok) {
          console.log("Server response", parsedRes);
          setFirstName(parsedRes.firstName);

          // If the request was unsuccessful...
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchUserData();
  }, [props.currentUserId]);

  return (
    <div>
      <h2 id="greeting">Welcome {firstName}!</h2>
    </div>
  );
};
