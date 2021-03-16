import React from "react";
import classes from "./TopNews.module.css";
import * as actions from "../../Shared/Utility";

const TopNews = React.memo((props) => {
  const { newsData } = props;

  const randomNum = Math.floor(Math.random() * 10 + 1);
  const TopNews = newsData && newsData.articles;

  return (
    <div className={classes.TopNews}>
      <div>
        <h1> {TopNews[randomNum].title}</h1>
        <p>
          {TopNews[randomNum].description.substring(0, 150)}
          ...
        </p>
        <div
          className={classes.Link}
          onClick={() => actions.openNewTabHandler(TopNews[randomNum].url)}
        >
          Read full story {">"}
        </div>
      </div>
      <hr />
      <div>
        <h2> {TopNews[randomNum + 1].title}</h2>
        <p>
          {TopNews[randomNum + 1].description.substring(0, 150)}
          ...
        </p>
        <div
          className={classes.Link}
          onClick={() => actions.openNewTabHandler(TopNews[randomNum + 1].url)}
        >
          Read full story {">"}
        </div>
      </div>
      <hr />
    </div>
  );
});

export default TopNews;
