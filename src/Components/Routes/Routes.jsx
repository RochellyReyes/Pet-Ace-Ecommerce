import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Home from "../../views/Home/Home";
import Products from "../../views/Products/Products";
import Contact from "../../views/Contact/Contact";
import Nav from "../Nav"


const Routes = () => {
    return (
      <Router> 
        <div>
          <Nav/>
  
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Routes;
