import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      <h1>Toggle</h1>
    </div>
  );
};

export default Toggle;
