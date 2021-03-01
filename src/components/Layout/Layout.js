import React from "react";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <div className={classes.Layout}>
        <p className={classes.Logo}>
          WhiteBoard<span>NEWS</span>
        </p>
      </div>
    </div>
  );
};

export default Layout;
