import React from "react";
import classes from "./TopNews.module.css";
import * as actions from "../../Shared/Utility";

const TopNews = (props) => {
  console.log("TOP NEWS");

  // const { newsData } = props;
  console.log(props.newsData);

  let title = null;
  let url = null;
  let description = null;
  const randomNum = Math.floor(Math.random() * 10 + 1);

  if (!props.newsData) {
    // title = props.newsData.articles[2].title;
    // url = props.newsData.articles[randomNum].url;
    // description = props.newsData.articles[randomNum].description.substring(
    //   0,
    //   150
    // );
    title = "eror";
  }
  console.log(title);

  return (
    <div className={classes.TopNews}>
      <div>
        <h1>{title}</h1>
        <p>
          {description}
          ...
        </p>
        <div
          className={classes.Link}
          onClick={() => actions.openNewTabHandler(url)}
        >
          Read full story {">"}
        </div>
      </div>
      <hr />
      <div>
        <h2> {title}</h2>
        <p>
          {description}
          ...
        </p>
        <div
          className={classes.Link}
          onClick={() => actions.openNewTabHandler(url)}
        >
          Read full story {">"}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopNews;
