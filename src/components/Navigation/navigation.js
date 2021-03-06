import React from "react";

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
      {category &&
        category.map((cat, i) => {
          return (
            <li key={i} onClick={onSelectCategory.bind(this, cat)}>
              {cat}
            </li>
          );
        })}
    </div>
  );
});

export default navigation;
