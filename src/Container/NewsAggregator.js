import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import NewsCards from "../components/Cards/NewsCards";
import TopNews from "../components/TopNews/TopNews";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Modal/ErrorModal";
import Slideshow from "../components/UI/SlideShow/SlideShow";
import HorizCards from "../components/HorizontalCards/HorizCards";

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

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
    dispatchHttp({ type: "SEND" });
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f6352cf470204beca0112cd570c29114"
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

  //Card News Component
  const CardsComponent = useMemo(() => {
    return httpState.loading ? <Spinner /> : <NewsCards newsData={news} />;
  }, [httpState.loading, news]);

  //TopNews Component
  const Topnews = useMemo(() => {
    return httpState.loading ? null : <TopNews newsData={news} />;
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
    <div>
      {httpState.error && (
        <ErrorModal onClose={errorModalClose}>{httpState.error}</ErrorModal>
      )}
      {slideshow}
      {CardsComponent}
      {HorizontalCardsNews}
    </div>
  );
};

export default NewsAggregator;
