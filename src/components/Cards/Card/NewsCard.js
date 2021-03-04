import React from "react";
import classes from "./NewsCard.module.css";
import * as actions from "../../../Shared/Utility";

const NewsCard = React.memo((props) => {
  console.log("CARD RENDERED");

  return (
    <div className={classes.NewsCard}>
      <div className={classes.ImgCard}>
        <img src={props.imgLink} alt="true" />
      </div>
      <span>{props.title}</span>
      <hr />
      <p>
        {actions.TimesCounter(props.newsTimes)} | {props.author}
      </p>
      <a href="true">Detik.com</a>
    </div>
  );
});

export default NewsCard;
