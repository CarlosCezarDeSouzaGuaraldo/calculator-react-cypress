import React from "react";
import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit id="digit" data-testid="display" className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
