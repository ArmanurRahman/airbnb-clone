import React from "react";
import Logo from "../../component/UI/Logo/Logo";
import classes from "./Header.module.css";
import SeachIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const Home = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <div className={classes.HeaderCenter}>
        <input type='text' />
        <SeachIcon />
      </div>

      <div className={classes.HeaderRight}>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreSharpIcon />
        <AccountCircleSharpIcon />
      </div>
    </div>
  );
};

export default Home;
