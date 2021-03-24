import React from "react";
import classes from "./Content.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import * as actions from "../../Shared/Utility";

const Content = (props) => {
  console.log(props);
  const Data = props.location.state;
  console.log(Data.content.length);

  return (
    <div className={classes.Content}>
      <div className={classes.Icon}>
        <FaArrowCircleLeft
          size="30"
          spin="true"
          onClick={() => props.history.goBack()}
        />
      </div>
      <h3>{Data.title}</h3>
      <div className={classes.Image}>
        <img src={Data.urlToImage} alt="true" />
      </div>
      <div className={classes.Description}>{Data.description}</div>
      <div className={classes.NewsDetail}>{`By ${
        Data.author
      } | ${actions.GetFullDate(Data.publishedAt)}`}</div>
      <hr />
      <div className={classes.Article}>
        <p>{Data.content.substring(0, 200)}</p>
      </div>
    </div>
  );
};

export default Content;
