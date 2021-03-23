import React from "react";
import classes from "./NewsCard.module.css";
import * as actions from "../../../Shared/Utility";
import { FaGlobeAmericas } from "react-icons/fa";

const NewsCard = React.memo((props) => {
  console.log("CARD RENDERED");
  console.log(props.data);

  return (
    <div className={classes.NewsCard}>
      <div
        className={classes.ImgCard}
        onClick={() => actions.openNewTabHandler(props.toUrl)}
      >
        <img src={props.imgLink} alt="true" />
      </div>
      <span onClick={() => props.onClickArticleHandler(props.data)}>
        {props.title}
      </span>
      <hr />
      <p>
        {actions.TimesCounter(props.newsTimes)} |
        <span> {props.author ? props.author : props.sources}</span>
      </p>
      <li
        className={classes.Link}
        onClick={() => actions.openNewTabHandler(props.toUrl)}
      >
        <span>read more {">"}</span>
      </li>
      <li
        onClick={() => actions.openNewTabHandler(props.toUrl)}
        className={classes.Link}
      >
        <FaGlobeAmericas />
        {props.sources}
      </li>
    </div>
  );
});

export default NewsCard;
