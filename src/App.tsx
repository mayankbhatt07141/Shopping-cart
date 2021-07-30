import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Wishlist from "./views/Wishlist";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import Coursedetails from "./views/Coursedetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/wishlist" component={Wishlist}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/courses/:id" component={Coursedetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
