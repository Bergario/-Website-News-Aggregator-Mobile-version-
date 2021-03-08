import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./navigation.module.css";

const navigation = React.memo((props) => {
  console.log("NAV RENDERED");
  const { category, onSelectCategory, onVisibleNav } = props;
  let attachedClass = [classes.Navigation, classes.Visible];
  if (!onVisibleNav) {
    attachedClass = [classes.Navigation, classes.Invisible];
  }
  return (
    <div className={attachedClass.join(" ")}>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName={classes.Active}
          path="category"
          focus="true"
        >
          All
        </NavLink>
      </li>
      {category &&
        category.map((cat, i) => {
          return (
            <li
              key={i}
              onClick={onSelectCategory.bind(this, cat.toLowerCase())}
            >
              <NavLink
                to={`${cat.toLowerCase()}`}
                activeClassName={classes.Active}
              >
                {cat}
              </NavLink>
            </li>
          );
        })}
    </div>
  );
});

export default navigation;
