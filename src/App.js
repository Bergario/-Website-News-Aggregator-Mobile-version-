import React, { useMemo } from "react";
import classes from "./App.module.css";
import NewsAggregator from "./Container/NewsAggregator";
import { Route, Switch, useHistory } from "react-router-dom";
import NewsByCategory from "./Container/NewsByCategory";
import Layout from "./components/Layout/Layout";

function App() {
  const history = useHistory().location;
  console.log(history);

  const Routes = useMemo(() => {
    return (
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
        </Switch>
      </Layout>
    );
  }, []);

  return <div className={classes.App}>{Routes}</div>;
}

export default App;
