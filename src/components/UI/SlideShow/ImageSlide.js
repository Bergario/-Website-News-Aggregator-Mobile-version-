import React from "react";
import classes from "./ImageSlide.module.css";

const ImageSlide = (props) => {
  return (
    <div className={classes.Each_slide}>
      <div
        style={{
          backgroundImage: `url(${props.imgLink})`,
          height: "250px",
        }}
      ></div>
      <div className={classes.NewsTitle}>
        <span>HEALT</span>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default ImageSlide;
