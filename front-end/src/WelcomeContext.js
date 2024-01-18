// WelcomeContext.js
import React, { createContext, useContext, useState } from "react";

const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const handleCloseWelcomeText = () => {
    setShowWelcomeText(false);
  };

  return (
    <WelcomeContext.Provider
      value={{ showWelcomeText, handleCloseWelcomeText }}
    >
      {children}
    </WelcomeContext.Provider>
  );
};

export const useWelcomeContext = () => useContext(WelcomeContext);
