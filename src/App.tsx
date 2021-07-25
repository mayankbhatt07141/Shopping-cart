import React from 'react';
import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Course from './Components/Course';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Profile from './Components/Profile';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Course}></Route>
        <Route path='/wishlist' component={Wishlist}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/profile' component={Profile}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
