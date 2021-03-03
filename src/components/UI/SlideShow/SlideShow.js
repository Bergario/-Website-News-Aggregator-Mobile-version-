import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import ImageSlide from "./ImageSlide";

const Slideshow = (props) => {
  // let newsResult = null;
  // newsResult = props.newsData.articles;
  // console.log(newsResult);

  const [newsSlide, setNewsSlide] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=f6352cf470204beca0112cd570c29114"
      )
      .then((response) => {
        setNewsSlide(response.data);
      });
  }, []);

  const slidePost =
    newsSlide &&
    newsSlide.articles.map((result) => (
      <ImageSlide imgLink={result.urlToImage} />
    ));

  const Posts = newsSlide ? (
    <div className="slide-container">
      <Slide>{slidePost ? slidePost : <ImageSlide />}</Slide>
    </div>
  ) : (
    <></>
  );

  return Posts;
};

export default Slideshow;
