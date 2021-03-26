import React from "react";
import classes from "./HorizCard.module.css";

const HorizCard = (props) => {
  console.log("Horiz");

  return (
    <div
      className={classes.HorizontalCard}
      onClick={() => props.onClickArticleHandler(props.data)}
    >
      <img src={props.imgLink} alt="true" />
      <div className={classes.Card_Content}>{props.title}</div>
    </div>
  );
};

export default HorizCard;
