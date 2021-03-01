import classes from "./App.module.css";
import NewsAggregator from "./Container/NewsAggregator";

function App() {
  return (
    <div className={classes.App}>
      <NewsAggregator />
    </div>
  );
}

export default App;
