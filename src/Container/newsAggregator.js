import React from "react";
import NewsCards from "../components/Cards/NewsCards";
import Navigation from "../components/Navigation/navigation";

const newsAggregator = () => {
  return (
    <div>
      <Navigation />
      <NewsCards />
    </div>
  );
};

export default newsAggregator;
