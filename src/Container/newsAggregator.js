import React, { useEffect, useState } from "react";
import NewsCards from "../components/Cards/NewsCards";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/navigation";
import axios from "axios";
import Spinner from "../components/UI/Spinner/Spinner";

const NewsAggregator = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=f6352cf470204beca0112cd570c29114"
      )
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);
  const LayoutComponent = isLoading ? (
    <Spinner />
  ) : (
    <NewsCards newsData={news} />
  );
  return (
    <div>
      <Layout />
      <Navigation />
      {LayoutComponent}
    </div>
  );
};

export default NewsAggregator;
