// WelcomeText.js
import React from "react";
import { useWelcomeContext } from "./WelcomeContext";

const WelcomeText = () => {
  const { showWelcomeText, handleCloseWelcomeText } = useWelcomeContext();

  if (!showWelcomeText) {
    return null;
  }

  return (
    <div className="welcome-text">
      <p>
        Welcome to our food app! Embark on a culinary journey where you can
        discover delightful recipes and explore captivating photos of food
        from diverse cultures.
      </p>
    </div>
  );
};

export default WelcomeText;
