import React from "react";
import classes from "./Spinner.module.css";

const Spinner = React.memo(() => {
  return <div className={classes.Loader}></div>;
});

export default Spinner;
