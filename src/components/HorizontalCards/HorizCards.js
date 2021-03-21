import React, { useEffect, useState, useMemo } from "react";
import HorizCard from "./HorizCard/HorizCard";
import axios from "axios";
import classes from "./HorizCards.module.css";

const HorizCards = () => {
  const [newsData, setNewsData] = useState("");
  console.log(newsData);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&apiKey=f6352cf470204beca0112cd570c29114"
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

  return <div className={classes.Container}>{HorizontalCardNews}</div>;
};

export default HorizCards;
