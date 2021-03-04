import React from "react";

import classes from "./navigation.module.css";

const navigation = React.memo(() => {
  console.log("NAV RENDERED");

  return (
    <div className={classes.Navigation}>
      <li>SPORT</li>
      <li>SCIENCE</li>
      <li>TECHNOLOGY</li>
      <li>BUSINESS</li>
      <li>GENERAL</li>
      <li>HEALTH</li>
      <li>ENTERTAINMENT</li>
    </div>
  );
});

export default navigation;
