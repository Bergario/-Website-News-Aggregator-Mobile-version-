import React from "react";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

const NewsCards = React.memo((props) => {
  console.log("CARDS");

  const { newsData } = props;
  console.log(newsData);

  const randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);

  return (
    <div className={classes.NewsCards}>
      <div className={classes.TopNews}>
        <h2> {newsData && newsData.articles[randomNum].title}</h2>
        <p>
          {newsData &&
            newsData.articles[randomNum].description.substring(0, 150)}
          ...
        </p>
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
            />
          );
        })}
    </div>
  );
});

export default NewsCards;
