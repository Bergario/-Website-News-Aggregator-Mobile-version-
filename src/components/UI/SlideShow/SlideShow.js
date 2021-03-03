import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./SlideShow.module.css";

const Slideshow = (props) => {
  let newsResult = null;
  newsResult = props.newsData.articles;
  console.log(newsResult);

  return (
    <div className="slide-container">
      <Slide>
        <div className={classes.Each_slide}>
          <div
            style={{
              backgroundImage: `url(${newsResult && newsResult[0].urlToImage})`,
              height: "300px",
            }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className={classes.Each_slide}>
          <div
            style={{
              backgroundImage: `url(${newsResult && newsResult[1].urlToImage})`,
              height: "300px",
            }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className={classes.Each_slide}>
          <div
            style={{
              backgroundImage: `url(${newsResult && newsResult[2].urlToImage})`,
              height: "300px",
            }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
