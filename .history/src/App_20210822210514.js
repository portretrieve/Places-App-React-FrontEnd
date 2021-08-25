import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Users />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
