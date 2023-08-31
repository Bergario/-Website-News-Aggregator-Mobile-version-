import React, { useEffect, useState, useMemo, useCallback } from "react";
import NewsCards from "../components/Cards/NewsCards";
import HorizCards from "../components/HorizontalCards/HorizCards";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Spinner from "../components/UI/Spinner/Spinner";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import classes from "../components/UI/pagination/Pagination.module.css";
import Layout from "../components/Layout/Layout";

const NewsByCategory = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const history = useHistory();

  const cat = history.location.pathname.substring(1, 15);
  console.log(cat);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&page=${pageNumber}&apiKey=431f7d44704c47a698fc804cdfa23881`
      )
      .then((response) => {
        console.log(response);
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [cat, pageNumber]);

  //Modal Handler
  const errorModalClose = useCallback(() => {
    setError(null);
    setIsLoading(false);
  }, []);

  //CLick Article Handler
  const clickArticleHandler = useCallback((data) => {
    history.push("/article", data);
  }, []);

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
  }, [isLoading, news, cat, clickArticleHandler]);

  //Error Modal
  const errorModal = useMemo(() => {
    return error && <ErrorModal onClose={errorModalClose}>{error}</ErrorModal>;
  }, [error, errorModalClose]);

  //Page Handler
  const PageClickHandler = useCallback(({ selected }) => {
    setPageNumber(selected);
  }, []);

  //Pagination Component
  const Page = useMemo(() => {
    return isLoading ? null : (
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        pageCount={"5"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={PageClickHandler}
        containerClassName={classes.Pagination}
        previousLinkClassName={"PrevBtn"}
        nextLinkClassName="NextBtn"
        disabledClassName="paginationDisabled"
        activeClassName={classes.Active}
      />
    );
  }, [isLoading, PageClickHandler]);

  return (
    <Layout newsData={news}>
      {errorModal}
      {CardsComponent}
      {Page}
      {HorizontalCardsNews}
    </Layout>
  );
};

export default NewsByCategory;
