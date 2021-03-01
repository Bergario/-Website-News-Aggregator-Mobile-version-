import classes from "./App.module.css";
import NewsAggregator from "./Container/newsAggregator";

function App() {
  return (
    <div className={classes.App}>
      <NewsAggregator />
    </div>
  );
}

export default App;
