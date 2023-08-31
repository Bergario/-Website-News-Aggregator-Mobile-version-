import React from "react";
import classes from "./NewsCard.module.css";
import * as actions from "../../../Shared/Utility";
import { FaGlobeAmericas } from "react-icons/fa";

const NewsCard = React.memo((props) => {
  return (
    <div className={classes.NewsCard}>
      <div
        className={classes.ImgCard}
        onClick={() => props.onClickArticleHandler(props.data)}
      >
        {props.imgLink ? (
          <img src={props.imgLink} alt="true" />
        ) : (
          <img src="/no-image.png" alt="true" />
        )}
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
        onClick={() => props.onClickArticleHandler(props.data)}
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
