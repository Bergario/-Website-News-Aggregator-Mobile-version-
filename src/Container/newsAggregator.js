import React, { useEffect, useState, useCallback, useMemo } from "react";
import NewsCards from "../components/Cards/NewsCards";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/navigation";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Slideshow from "../components/UI/SlideShow/SlideShow";
import { Route, useHistory } from "react-router-dom";

const NewsAggregator = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scroll, setScroll] = useState("");
  const [visibleNavbar, setVisibleNavbar] = useState(true);
  const [category] = useState([
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ]);

  const history = useHistory().location;

  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    setIsLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f6352cf470204beca0112cd570c29114"
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

  const CardsComponent = useMemo(() => {
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
    return () => {
      window.removeEventListener("scroll", navScrollHandler);
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
      <Route
        path="/"
        exact
        render={() => {
          return isLoading ? null : <Slideshow newsData={news} />;
        }}
      />
      <Route exact path="/" render={() => CardsComponent} />
      <Route
        path={history.pathname == "/" ? "/general" : history.pathname}
        render={() => CardsComponent}
      />
    </div>
  );
};

export default NewsAggregator;
