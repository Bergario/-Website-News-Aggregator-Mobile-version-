import React from "react";

import classes from "./navigation.module.css";

const navigation = () => {
  return (
    <div>
      <li className={classes.Navigation} active="true">
        #SPORT
      </li>
      <li className={classes.Navigation}>#SCIENCE</li>
      <li className={classes.Navigation}>#TECHNOLOGY</li>
    </div>
  );
};

export default navigation;
