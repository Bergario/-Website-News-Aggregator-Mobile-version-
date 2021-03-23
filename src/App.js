import React, { useMemo, useState } from "react";
import classes from "./App.module.css";
import NewsAggregator from "./Container/NewsAggregator";
import { Route, Switch, useHistory } from "react-router-dom";
import NewsByCategory from "./Container/NewsByCategory";
import Layout from "./components/Layout/Layout";
import Content from "./components/Content/Content";

function App() {
  const history = useHistory().location;
  console.log(history);

  // setPathname(history.pathname);

  const Routes = useMemo(
    () => (
      <Layout>
        <Switch>
          <Route path="/" component={NewsAggregator} exact />
          <Route path="/business" component={NewsByCategory} />
          <Route path="/entertainment" component={NewsByCategory} />
          <Route path="/general" component={NewsByCategory} />
          <Route path="/health" component={NewsByCategory} />
          <Route path="/science" component={NewsByCategory} />
          <Route path="/sports" component={NewsByCategory} />
          <Route path="/technology" component={NewsByCategory} />
          <Route path="/article" component={Content} />
        </Switch>
      </Layout>
    ),
    []
  );

  return <div className={classes.App}>{Routes}</div>;
}

export default App;
