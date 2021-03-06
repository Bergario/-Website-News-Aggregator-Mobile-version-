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
  const [scroll, setScroll] = useState("");
  const [visibleNavbar, setVisibleNavbar] = useState(true);
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
        "http://newsapi.org/v2/everything?q=apple&from=2021-03-02&to=2021-03-02&sortBy=popularity&apiKey=f6352cf470204beca0112cd570c29114"
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

  // Navbar auto hide
  const navScrollHandler = useCallback(() => {
    const scrollTop = document.body.getBoundingClientRect().top;
    setScroll(scrollTop);
    setVisibleNavbar(scroll <= scrollTop);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", navScrollHandler);
    console.log("add");
    return () => {
      window.removeEventListener("scroll", navScrollHandler);
      console.log("cleanup");
    };
  }, [scroll, navScrollHandler]);

  return (
    <div>
      {error && <ErrorModal onClose={errorModalClose}>{error}</ErrorModal>}
      <Layout />
      <Navigation
        category={category}
        onSelectCategory={selectCategoryHandler}
        onVisibleNav={visibleNavbar}
      />
      {isLoading ? null : <Slideshow newsData={news} />}
      {LayoutComponent}
    </div>
  );
};

export default NewsAggregator;
