import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

export default function NewsCards(props) {
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
}
