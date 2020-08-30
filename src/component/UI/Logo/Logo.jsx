import React from "react";
import AirBmbImg from "../../../asset/img/airbnb-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={AirBmbImg} />
    </div>
  );
};

export default Logo;
