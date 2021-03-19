import React from "react";
import classes from "./HorizCard.module.css";

const HorizCard = (props) => {
  console.log("Horiz");
  console.log(props);

  return (
    <div className={classes.HorizontalCard}>
      <img src={props.imgLink} />
      <div className={classes.Card_Content}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default HorizCard;
