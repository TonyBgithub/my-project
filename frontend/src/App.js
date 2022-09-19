import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import test from "./test";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartScreen} /> {/* Question mark indicates that it is optional. We want the user to be able to go to the shopping cart screen without adding a new item to the cart. */}
    <Route path="/" component={HomeScreen} exact /> {/* Only when the route is equal to exactly /*/}
    <Route path="/product/:id" component={ProductScreen} /> {/* colon id contains the id of your product */}
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
