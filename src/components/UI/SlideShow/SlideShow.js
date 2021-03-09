import React, { useEffect, useState, useMemo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import ImageSlide from "./ImageSlide";

const Slideshow = () => {
  const [newsSlide, setNewsSlide] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f6352cf470204beca0112cd570c29114"
      )
      .then((response) => {
        // setNewsSlide(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const slidePost = useMemo(() => {
    return (
      newsSlide &&
      newsSlide.articles.map((result, i) => (
        <ImageSlide title={result.title} imgLink={result.urlToImage} key={i} />
      ))
    );
  }, [newsSlide]);

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
