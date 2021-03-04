import React, { useEffect, useState, useCallback, useMemo } from "react";
import NewsCards from "../components/Cards/NewsCards";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/navigation";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Slideshow from "../components/UI/SlideShow/SlideShow";

const NewsAggregator = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category] = useState([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]);
  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    setIsLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f6352cf470204beca0112cd570c29114"
      )
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const selectCategoryHandler = useCallback((category) => {
    setIsLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=f6352cf470204beca0112cd570c29114`
      )
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const errorModalClose = useCallback(() => {
    setError(null);
    setIsLoading(false);
  }, []);

  const LayoutComponent = useMemo(() => {
    return isLoading ? <Spinner /> : <NewsCards newsData={news} />;
  }, [isLoading, news]);

  return (
    <div>
      {error && <ErrorModal onClose={errorModalClose}>{error}</ErrorModal>}
      <Layout />
      <Navigation
        category={category}
        onSelectCategory={selectCategoryHandler}
      />
      <Slideshow newsData={news} />
      {LayoutComponent}
    </div>
  );
};

export default NewsAggregator;
