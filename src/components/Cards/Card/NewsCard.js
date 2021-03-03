import React from "react";
import classes from "./NewsCard.module.css";

const NewsCard = React.memo((props) => {
  console.log("CARD RENDERED");

  return (
    <div className={classes.NewsCard}>
      <div className={classes.ImgCard}>
        <img src={props.imgLink} alt="true" />
      </div>
      <span>{props.title}</span>
    </div>
  );
});

export default NewsCard;
