import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
      <Router>
        <Switch>
          
          <Route exact to="/">
            <CategoryPage />
          </Route>

         

        </Switch>
      </Router>
  );
}

export default App;