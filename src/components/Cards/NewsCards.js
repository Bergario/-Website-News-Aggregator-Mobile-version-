import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData } = props;
  console.log(newsData);

  return (
    <div className={classes.NewsCards}>
      <div className={classes.TopNews}>
        <p> {newsData && newsData.articles[2].title}</p>
      </div>
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
            />
          );
        })}
    </div>
  );
});

export default NewsCards;
