import React from "react";

import classes from "./navigation.module.css";

const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <span className={classes.Logo}>WhiteBoard</span>
      <br />
      <hr />
      <h4>Home</h4>
      <h4>About Us</h4>
      <h4>Login</h4>
    </div>
  );
};

export default navigation;
