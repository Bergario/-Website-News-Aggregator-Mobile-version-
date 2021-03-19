import React, { useEffect, useState, useMemo } from "react";
import HorizCard from "./HorizCard/HorizCard";
import axios from "axios";
import classes from "./HorizCards.module.css";

const HorizCards = () => {
  const [newsData, setNewsData] = useState("");
  console.log(newsData);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=f6352cf470204beca0112cd570c29114"
      )
      .then((response) => setNewsData(response.data));
  }, []);

  const HorizontalCardNews = useMemo(() => {
    return (
      newsData &&
      newsData.articles.map((result) => {
        return <HorizCard imgLink={result.urlToImage} title={result.title} />;
      })
    );
  }, [newsData]);

  //   const HorizontalCardNews = useMemo(() => {
  //     return newsData ? <HorizCard /> : null;
  //   }, [newsData]);

  return <div className={classes.Container}>{HorizontalCardNews}</div>;
};

export default HorizCards;
