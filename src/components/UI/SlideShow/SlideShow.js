import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import ImageSlide from "./ImageSlide";

const Slideshow = () => {
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const slidePost =
    newsSlide &&
    newsSlide.articles.map((result, i) => (
      <ImageSlide title={result.title} imgLink={result.urlToImage} key={i} />
    ));

  const Posts = newsSlide ? (
    <div>
      <h3>LATEST TECH</h3>
      <div className="slide-container">
        <Slide>{slidePost ? slidePost : <ImageSlide />}</Slide>
      </div>
    </div>
  ) : (
    <></>
  );

  return Posts;
};

export default Slideshow;
