import React, { useEffect, useState, useMemo, useCallback } from "react";
import HorizCard from "./HorizCard/HorizCard";
import axios from "axios";
import classes from "./HorizCards.module.css";

const HorizCards = () => {
  const [newsData, setNewsData] = useState("");
  const [newsSources, setNewsSources] = useState({
    sources: "techcrunch",
    name: "Techcrunch",
  });
  console.log(newsData);

  const randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);

  let d = "";

  if (randomNum <= 2) {
    d = "enganget";
  } else if (randomNum <= 4) {
    d = "the-verge";
  } else if (randomNum <= 6) {
    d = "techcrunch";
  } else if (randomNum <= 8) {
    d = "cnn";
  } else {
    d = "bbc-news";
  }

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${d}&apiKey=f6352cf470204beca0112cd570c29114`
      )
      .then((response) => isMounted && setNewsData(response.data))
      .catch((error) => console.log(error.message));

    return () => (isMounted = false);
  }, []);

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
      <h3>{HorizontalCardNews ? `Recently from ${d.toUpperCase()}` : null}</h3>
      <div className={classes.Container}>{HorizontalCardNews}</div>
    </div>
  );
};

export default HorizCards;
