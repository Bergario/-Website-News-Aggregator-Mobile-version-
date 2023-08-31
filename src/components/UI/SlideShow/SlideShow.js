import React, { useEffect, useState, useMemo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import ImageSlide from "./ImageSlide";
import classes from "./ImageSlide.module.css";

const Slideshow = () => {
  const [newsSlide, setNewsSlide] = useState(null);
  console.log("slide");

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
<<<<<<< HEAD
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=431f7d44704c47a698fc804cdfa23881"
=======
        "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=e4c48ca5b6b743248ed9a5e9ab69174c"
>>>>>>> e5d99c0126e4a9fcb20b04d129b9c9991f4fd24b
      )
      .then((response) => {
        isMounted && setNewsSlide(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const slidePost = useMemo(() => {
    return (
      newsSlide &&
      newsSlide.articles.map((result, i) => (
        <ImageSlide
          title={result.title}
          imgLink={result.urlToImage}
          key={i}
          toUrl={result.url}
        />
      ))
    );
  }, [newsSlide]);

  const Posts = newsSlide ? (
    <div>
      <div className={classes.Title_Background}>
        <p>Top tech headlines</p>
      </div>
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
