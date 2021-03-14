import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";
import * as actions from "../../Shared/Utility";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData } = props;
  console.log(newsData);

  const randomNum = Math.floor(Math.random() * 10 + 1);
  const title = newsData && newsData.articles[randomNum].title;
  const description = newsData && newsData.articles[randomNum].description;
  const url = newsData && newsData.articles[randomNum].url;

  return (
    <div className={classes.NewsCards}>
      <div className={classes.TopNews}>
        <h2> {title}</h2>
        <p>
          {description.substring(0, 150)}
          ...
        </p>
        <div
          className={classes.Link}
          onClick={() => actions.openNewTabHandler(url)}>
          Read full story {">"}
        </div>
      </div>
      <hr />
      <h3>HEADLINES</h3>
      {newsData &&
        newsData.articles.map((result, i) => {
          // console.log(result.length);

          return (
            <NewsCard
              key={i}
              title={result.title}
              imgLink={result.urlToImage}
              newsTimes={result.publishedAt}
              author={result.author}
              sources={result.source.name}
              toUrl={result.url}
            />
          );
        })}
    </div>
  );
});

export default NewsCards;
