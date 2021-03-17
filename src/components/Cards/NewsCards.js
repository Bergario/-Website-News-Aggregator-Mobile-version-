import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData, onCategorySelected } = props;
  console.log(onCategorySelected);

  return (
    <div className={classes.NewsCards}>
      <h1>{onCategorySelected ? onCategorySelected : "HEADLINES"}</h1>
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
