import React from "react";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import { Home } from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route onclick path="/checkout">
          <Header/>
          <Checkout/>
          </Route>
          <Route path="/login">  
          <Header/>
       
          <Login/>
          </Route>
          <Route path="/">
          <Header/>
          <Home/>
           </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
