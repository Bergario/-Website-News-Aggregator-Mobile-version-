import React from "react";
import classes from "./ImageSlide.module.css";
import * as actions from "../../../Shared/Utility";

const ImageSlide = (props) => {
  return (
    <div className={classes.Each_slide}>
      <div
        style={{
          backgroundImage: `url(${props.imgLink})`,
          height: "250px",
        }}
      ></div>
      <div
        className={classes.NewsTitle}
        onClick={() => actions.openNewTabHandler(props.toUrl)}
      >
        <h5>TECH</h5>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default ImageSlide;
