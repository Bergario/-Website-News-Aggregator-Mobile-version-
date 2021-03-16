import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";
import * as actions from "../../Shared/Utility";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData } = props;
  console.log(newsData);

  return (
    <div className={classes.NewsCards}>
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
