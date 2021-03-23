import React from "react";
import classes from "./Content.module.css";

const Content = (props) => {
  console.log(props);
  const Data = props.location.state;
  console.log(Data);

  return (
    <div className={classes.Content}>
      <h3>{Data.title}</h3>
      <div>
        <img src={Data.urlToImage} alt="true" />
      </div>
      <div>{Data.description}</div>
      <div>{`By ${Data.author} | ${Data.publishedAt}`}</div>
      <hr />
      <div>
        <p>{Data.content.substring(0, 2000)}</p>
      </div>
    </div>
  );
};

export default Content;
