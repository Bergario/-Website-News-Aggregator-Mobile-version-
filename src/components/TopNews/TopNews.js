import React from "react";
import classes from "./TopNews.module.css";
import * as actions from "../../Shared/Utility";

const TopNews = (props) => {
  console.log("TOP NEWS");

  const { newsData } = props;
  console.log(newsData);

  const randomNum = Math.floor(Math.random() * 10 + 1);
  const { title, url } = newsData && newsData.articles[randomNum];
  // const title = newsData && newsData.articles[randomNum].title;
  const description = newsData && newsData.articles[randomNum].description;
  // const url = newsData && newsData.articles[randomNum.url];

  return (
    <div className={classes.TopNews}>
      <div>
        <h1> {title}</h1>
        <p>
          {description.substring(0, 150)}
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
          {description.substring(0, 150)}
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
