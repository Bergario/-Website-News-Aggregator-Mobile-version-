import React from "react";
import classes from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  console.log("Footer");

  return (
    <div className={classes.Footer}>
      <h2>WhiteBoardnews</h2>
      <FaInstagram size="25" className={classes.Icon} />
      <FaFacebook size="25" className={classes.Icon} />
      <FaTwitter size="25" className={classes.Icon} />
      <FaLinkedinIn size="25" className={classes.Icon} />
      <p>Copyright @2021-2023 WhiteBoardnews</p>
    </div>
  );
};

export default Footer;
