import React, { useState, useCallback } from "react";

import { Collapse } from "react-collapse";
import Button from "../UI/Button/Button";

import NewsCard from "./Card/NewsCard";
import classes from "./NewsCards.module.css";

const NewsCards = (props) => {
  console.log("CARDS");
  const { newsData, onCategorySelected } = props;

  const [openCollapse, setOpenCollapse] = useState(false);

  const openCollapseHandler = useCallback(() => {
    setOpenCollapse(!openCollapse);
  }, [openCollapse]);

  const newsDataSlice = newsData && newsData.articles.slice(0, 3);
  const newsDataCollapse = newsData && newsData.articles.slice(3, 10);
  console.log(newsDataSlice);

  return (
    <div className={classes.NewsCards}>
      <h1>{onCategorySelected ? onCategorySelected : "HEADLINES"}</h1>
      {newsData &&
        newsDataSlice.map((result, i) => {
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
      <Collapse isOpened={openCollapse}>
        {newsData &&
          newsDataCollapse.map((result, i) => {
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
      </Collapse>
      <Button clicked={openCollapseHandler} btnType="Success">
        {openCollapse ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default NewsCards;
