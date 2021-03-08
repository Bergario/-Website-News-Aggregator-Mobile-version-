import classes from "./App.module.css";
import NewsAggregator from "./Container/NewsAggregator";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    // <Switch>
    <div className={classes.App}>
      {/* <Route path="/" component={NewsAggregator} exact> */}
      <NewsAggregator />
      {/* </Route> */}
    </div>
    /* </Switch> */
  );
}

export default App;
