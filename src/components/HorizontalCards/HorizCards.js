import React, { useEffect, useState, useMemo, useCallback } from "react";
import HorizCard from "./HorizCard/HorizCard";
import axios from "axios";
import classes from "./HorizCards.module.css";

const HorizCards = () => {
  const [newsData, setNewsData] = useState("");
  const [newsSources, setNewsSources] = useState("");
  console.log(newsData);

  // let d = "";

  // if (randomNum <= 2) {
  //   d = "engadget";
  // } else if (randomNum <= 4) {
  //   d = "the-verge";
  // } else if (randomNum <= 6) {
  //   d = "techcrunch";
  // } else if (randomNum <= 8) {
  //   d = "cnn";
  // } else {
  //   d = "bbc-news";
  // }

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    let d = "";
    if (randomNum <= 2) {
      d = "engadget";
    } else if (randomNum <= 4) {
      d = "the-verge";
    } else if (randomNum <= 6) {
      d = "techcrunch";
    } else if (randomNum <= 8) {
      d = "cnn";
    } else {
      d = "bbc-news";
    }
    let isMounted = true;
    setNewsSources(d);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${newsSources}&apiKey=f6352cf470204beca0112cd570c29114`
      )
      .then((response) => isMounted && setNewsData(response.data))
      .catch((error) => {
        console.log(error.message);
      });

    return () => (isMounted = false);
  }, [newsSources]);

  const HorizontalCardNews = useMemo(() => {
    return (
      newsData &&
      newsData.articles.map((result, i) => {
        return (
          <HorizCard
            key={i}
            imgLink={result.urlToImage}
            title={result.title}
            toUrl={result.url}
          />
        );
      })
    );
  }, [newsData]);

  return (
    <div>
      <div className={classes.Title}>
        {HorizontalCardNews && (
          <p>
            RECENTLY FROM
            <span>{newsSources.toUpperCase()}</span>
          </p>
        )}
      </div>
      <div className={classes.Container}>{HorizontalCardNews}</div>
    </div>
  );
};

export default HorizCards;
