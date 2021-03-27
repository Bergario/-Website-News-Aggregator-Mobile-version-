import React, { useEffect, useState, useMemo, useCallback } from "react";
import HorizCard from "./HorizCard/HorizCard";
import axios from "axios";
import classes from "./HorizCards.module.css";
import { FaCaretRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const HorizCards = React.memo(() => {
  const [newsData, setNewsData] = useState("");
  const [newsSources, setNewsSources] = useState("");
  console.log("HCards");

  const history = useHistory();

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
        `https://newsapi.org/v2/top-headlines?sources=${newsSources}&apiKey=e4c48ca5b6b743248ed9a5e9ab69174c`
      )
      .then((response) => isMounted && setNewsData(response.data))
      .catch((error) => {});

    return () => (isMounted = false);
  }, [newsSources]);

  //CLick Article Handler
  const clickArticleHandler = useCallback((data) => {
    history.push("/article", data);
  }, []);

  const HorizontalCardNews = useMemo(() => {
    return (
      newsData &&
      newsData.articles.map((result, i) => {
        return (
          <HorizCard
            key={i}
            data={result}
            imgLink={result.urlToImage}
            title={result.title}
            toUrl={result.url}
            onClickArticleHandler={clickArticleHandler}
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
            LATEST FROM
            <FaCaretRight size="15" />
            <span> {newsSources}</span>
          </p>
        )}
      </div>
      <div className={classes.Container}>{HorizontalCardNews}</div>
    </div>
  );
});

export default HorizCards;
