import React from "react";

import classes from "./Layout.module.css";

const Layout = React.memo(() => {
  console.log("LAYOUT RENDERED");

  return (
    <div>
      <div className={classes.Layout}>
        WhiteBoard<span>NEWS</span>
      </div>
    </div>
  );
});

export default Layout;
