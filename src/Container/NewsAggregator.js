import React, { useEffect, useState, useCallback, useMemo } from "react";
import NewsCards from "../components/Cards/NewsCards";
import TopNews from "../components/TopNews/TopNews";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/navigation";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Slideshow from "../components/UI/SlideShow/SlideShow";
import { Route, useHistory, Switch } from "react-router-dom";

const NewsAggregator = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scroll, setScroll] = useState("");
  const [visibleNavbar, setVisibleNavbar] = useState(true);
  const [categorySelected, setCategorySelected] = useState(null);
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

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    setIsLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=f6352cf470204beca0112cd570c29114"
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
    setCategorySelected(category.toUpperCase());
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

  //Card News Component
  const CardsComponent = useMemo(() => {
    return isLoading ? (
      <Spinner />
    ) : (
      <NewsCards newsData={news} onCategorySelected={categorySelected} />
    );
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

  //TopNews Component
  const Topnews = useMemo(() => {
    return isLoading ? null : <TopNews newsData={news} />;
  }, [isLoading, news]);

  return (
    <div>
      {error && <ErrorModal onClose={errorModalClose}>{error}</ErrorModal>}
      <Layout />
      <Navigation
        category={category}
        onSelectCategory={selectCategoryHandler}
        onVisibleNav={visibleNavbar}
      />
      {/* <Switch> */}

      <Route
        path="/"
        exact
        render={() => {
          return isLoading ? null : <Slideshow newsData={news} />;
        }}
      />
      {Topnews}
      <Route exact path="/" render={() => CardsComponent} />
      <Route
        path={history.pathname}
        // path="/:id"
        render={() => (history.pathname === "/" ? null : CardsComponent)}
      />
      {/* </Switch> */}
    </div>
  );
};

export default NewsAggregator;
