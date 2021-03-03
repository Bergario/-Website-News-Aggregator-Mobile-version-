import React from "react";

import classes from "./navigation.module.css";

const navigation = React.memo(() => {
  console.log("NAV RENDERED");

  return (
    <div>
      <li className={classes.Navigation} active="true">
        #SPORT
      </li>
      <li className={classes.Navigation}>#SCIENCE</li>
      <li className={classes.Navigation}>#TECHNOLOGY</li>
    </div>
  );
});

export default navigation;
