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

  let viewPerPage = onCategorySelected ? 20 : 3;

  const newsDataSlice = newsData && newsData.articles.slice(0, viewPerPage);
  const newsDataCollapse = newsData && newsData.articles.slice(3, 10);

  //Collapse Component
  const CollapseCards = onCategorySelected ? null : (
    <>
      <Collapse isOpened={openCollapse}>
        {newsData &&
          newsDataCollapse.map((result, i) => {
            return (
              <NewsCard
                key={i}
                data={result}
                title={result.title}
                imgLink={result.urlToImage}
                newsTimes={result.publishedAt}
                author={result.author}
                sources={result.source.name}
                toUrl={result.url}
                onClickArticleHandler={props.onClickArticleHandler}
              />
            );
          })}
      </Collapse>
      <Button clicked={openCollapseHandler} btnType="Success">
        {openCollapse ? "Show Less" : "Show More"}
      </Button>
    </>
  );

  return (
    <div className={classes.NewsCards}>
      <div className={classes.Title_background}>
        <h1>{onCategorySelected ? onCategorySelected : "HEADLINES"}</h1>
      </div>
      {newsData &&
        newsDataSlice.map((result, i) => {
          return (
            <NewsCard
              key={i}
              data={result}
              title={result.title}
              imgLink={result.urlToImage}
              newsTimes={result.publishedAt}
              author={result.author}
              sources={result.source.name}
              toUrl={result.url}
              onClickArticleHandler={props.onClickArticleHandler}
            />
          );
        })}
      {CollapseCards}
    </div>
  );
};

export default NewsCards;
