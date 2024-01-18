import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // const userType = "customerUsers";


  //When we sign in parse the login data or initialize everything to zero
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    _id: null,
    username: null,
    userType: null,
    companyName: null,
    token: null,
  };

  const [currentUser, setCurrentUser] = useState(loginSession);

  const handleLogout = () => {
    // Perform logout logic (clear sessions, etc.)
    // Then set currentUser to null
    setCurrentUser({
      _id: null,
      username: null,
      userType: null,
      companyName: null,
      token: null,
    });
  };

  useEffect(() => {
    sessionStorage.setItem("login", JSON.stringify({ ...currentUser }));
  }, [currentUser]);


  return (
    //using AuthContext as a createContext
    <AuthContext.Provider value={{ currentUser, setCurrentUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );

};
