import React from "react";
import classes from "./NewsCard.module.css";
import * as actions from "../../../Shared/Utility";
import { FaGlobeAmericas } from "react-icons/fa";

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
        {actions.TimesCounter(props.newsTimes)} | <span>{props.author}</span>
      </p>
      <li className={classes.Link}>
        <span>read more {">"}</span>
      </li>
      <li className={classes.Link}>
        <FaGlobeAmericas />
        {props.sources}
      </li>
    </div>
  );
});

export default NewsCard;
