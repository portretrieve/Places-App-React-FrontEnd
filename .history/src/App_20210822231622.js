import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/place/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
