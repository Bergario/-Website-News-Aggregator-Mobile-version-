import React from "react";

import classes from "./navigation.module.css";

const navigation = React.memo((props) => {
  console.log("NAV RENDERED");
  const { category, onSelectCategory } = props;
  return (
    <div className={classes.Navigation}>
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
