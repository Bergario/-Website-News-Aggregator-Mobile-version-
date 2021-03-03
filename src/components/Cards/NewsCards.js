import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData } = props;
  return (
    <div className={classes.NewsCards}>
      {newsData &&
        newsData.articles.map((result, i) => {
          return (
            <NewsCard
              key={i}
              title={result.title}
              imgLink={result.urlToImage}
              newsTimes={result.publishedAt}
            />
          );
        })}
    </div>
  );
});

export default NewsCards;
