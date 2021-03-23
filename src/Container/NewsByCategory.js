import React, { useEffect, useState, useMemo, useCallback } from "react";
import NewsCards from "../components/Cards/NewsCards";
import HorizCards from "../components/HorizontalCards/HorizCards";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Spinner from "../components/UI/Spinner/Spinner";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewsByCategory = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();
  console.log(history);

  const cat = history.location.pathname.substring(1, 15);
  console.log(cat);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=${cat}&apiKey=f6352cf470204beca0112cd570c29114`
      )
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [cat]);

  //Modal Handler
  const errorModalClose = useCallback(() => {
    setError(null);
    setIsLoading(false);
  }, []);

  //CLick Article Handler
  const clickArticleHandler = useCallback((data) => {
    history.push("/article", data);
  });

  //Result
  // const ResultHandler =

  //Horizontal Card News
  const HorizontalCardsNews = useMemo(() => {
    return isLoading ? null : <HorizCards />;
  }, [isLoading]);

  //Card component
  const CardsComponent = useMemo(() => {
    return isLoading ? (
      <Spinner />
    ) : (
      <NewsCards
        newsData={news}
        onCategorySelected={cat.toUpperCase()}
        onClickArticleHandler={clickArticleHandler}
      />
    );
  }, [isLoading, news, cat]);

  //Error Modal
  const errorModal = useMemo(() => {
    return error && <ErrorModal onClose={errorModalClose}>{error}</ErrorModal>;
  }, [error, errorModalClose]);

  return (
    <>
      {errorModal}
      {CardsComponent}
      {HorizontalCardsNews}
    </>
  );
};

export default NewsByCategory;
