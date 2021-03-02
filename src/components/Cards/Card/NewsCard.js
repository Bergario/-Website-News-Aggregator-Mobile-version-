import React from "react";
import classes from "./NewsCard.module.css";
import * as actions from "../../../Shared/Utility";

export default function NewsCard(props) {
  return (
    <div className={classes.NewsCard}>
      <div className={classes.ImgCard}>
        <img src={props.imgLink} alt="" />
      </div>
      <span>{props.title}</span>
      <hr />
      <p>{actions.TimesCounter(props.newsTimes)}h | John Chris</p>
      <a href="true">Detik.com</a>
    </div>
  );
}
