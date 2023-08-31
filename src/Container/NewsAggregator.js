import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import NewsCards from "../components/Cards/NewsCards";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Slideshow from "../components/UI/SlideShow/SlideShow";
import HorizCards from "../components/HorizontalCards/HorizCards";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLOSE":
      return { loading: false, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};

const NewsAggregator = () => {
  const [news, setNews] = useState("");
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const history = useHistory();

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
    dispatchHttp({ type: "SEND" });
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=431f7d44704c47a698fc804cdfa23881"
      )
      .then((response) => {
        setNews(response.data);
        dispatchHttp({ type: "RESPONSE" });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  }, []);

  //Modal Handler
  const errorModalClose = useCallback(() => {
    dispatchHttp({ type: "CLOSE" });
  }, []);

  //CLick Article Handler
  const clickArticleHandler = useCallback((data) => {
    history.push("/article", data);
  }, []);

  //Card News Component
  const CardsComponent = useMemo(() => {
    return httpState.loading ? (
      <Spinner />
    ) : (
      <NewsCards newsData={news} onClickArticleHandler={clickArticleHandler} />
    );
  }, [httpState.loading, news]);

  //SlideShow Component
  const slideshow = useMemo(() => {
    return <Slideshow />;
  }, []);

  // Horizontal Card News Component
  const HorizontalCardsNews = useMemo(() => {
    return httpState.loading ? null : <HorizCards />;
  }, [httpState.loading]);

  return (
    <Layout newsData={news}>
      <div >
        {httpState.error && (
          <ErrorModal onClose={errorModalClose}>{httpState.error}</ErrorModal>
        )}
        {slideshow}
        {CardsComponent}
        {HorizontalCardsNews}
      </div>
    </Layout>
  );
};

export default NewsAggregator;
