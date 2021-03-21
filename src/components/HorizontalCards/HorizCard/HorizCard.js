import React from "react";
import classes from "./HorizCard.module.css";
import * as actions from "../../../Shared/Utility";

const HorizCard = (props) => {
  console.log("Horiz");

  return (
    <div
      className={classes.HorizontalCard}
      onClick={() => actions.openNewTabHandler(props.toUrl)}>
      <img src={props.imgLink} alt="true" />
      <div className={classes.Card_Content}>{props.title}</div>
    </div>
  );
};

export default HorizCard;
