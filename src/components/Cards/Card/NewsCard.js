import React from "react";
import classes from "./NewsCard.module.css";

export default function NewsCard(props) {
  return (
    <div className={classes.NewsCard}>
      <div className={classes.ImgCard}>
        <img src={props.imgLink} />
      </div>
      <span>{props.title}</span>
    </div>
  );
}
