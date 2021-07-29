import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";
import RecentListPage from "../../pages/RecentList";

import Header from "../Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/recentList" exact component={RecentListPage} />
          <Route path="/product" exact component={ProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
