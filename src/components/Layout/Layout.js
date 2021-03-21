import React, { useCallback, useState, useEffect, useMemo } from "react";
import Navigation from "../Navigation/navigation";

import classes from "./Layout.module.css";

const Layout = React.memo((props) => {
  console.log("LAYOUT RENDERED");

  const [scroll, setScroll] = useState("");
  const [visibleNavbar, setVisibleNavbar] = useState(true);
  const [category] = useState([
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ]);

  // / Navbar auto hide
  const navScrollHandler = useCallback(
    (props) => {
      const scrollTop = document.body.getBoundingClientRect().top;
      setScroll(scrollTop);
      setVisibleNavbar(scroll <= scrollTop);
    },
    [scroll]
  );
  const selectCategoryHandler = (test) => {};

  useEffect(() => {
    window.addEventListener("scroll", navScrollHandler);
    return () => {
      window.removeEventListener("scroll", navScrollHandler);
    };
  }, [scroll, navScrollHandler]);

  //Nav Component
  const NavComponent = useMemo(() => {
    return (
      <Navigation
        category={category}
        onSelectCategory={selectCategoryHandler}
        onVisibleNav={visibleNavbar}
      />
    );
  }, [category, visibleNavbar]);

  return (
    <div>
      <div className={classes.Layout}>
        WhiteBoard<span>NEWS</span>
      </div>
      {NavComponent}
      <main>{props.children}</main>
    </div>
  );
});

export default Layout;
