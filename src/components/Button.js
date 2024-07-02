import React from "react";
import "./Button.css";

const Button = ({ className, value, onClick }) => {
  return (
    <button data-testid={`calc-${value}`} className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
