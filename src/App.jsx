import Content from "../components/Content";
import Navigation from "../components/Navigation";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
