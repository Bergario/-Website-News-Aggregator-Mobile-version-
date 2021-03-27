import React from "react";
import classes from "./Content.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import * as actions from "../../Shared/Utility";
import Button from "../UI/Button/Button";
import Layout from "../Layout/Layout";

const Content = (props) => {
  console.log(props);
  const Data = props.location.state;

  return (
    <Layout newsData={Data}>
      <div className={classes.Content}>
        <div className={classes.Icon}>
          <FaArrowCircleLeft size="30" onClick={() => props.history.goBack()} />
        </div>
        <h3>{Data.title}</h3>
        <div className={classes.Image}>
          <img src={Data.urlToImage} alt="true" />
        </div>
        <div className={classes.Description}>{Data.description}</div>
        <div className={classes.NewsDetail}>{`By ${
          Data.author
        } | ${actions.GetFullDate(Data.publishedAt)}`}</div>
        <hr />
        <div className={classes.Article}>
          <p>{Data.content.substring(0, 200)}</p>
        </div>
        <Button
          btnType="Success"
          clicked={() => actions.openNewTabHandler(Data.url)}>
          Read more in original sources
        </Button>
      </div>
    </Layout>
  );
};

export default Content;
