import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import SizeFilter from "./components/SizeFilter";
import PriceFitler from "./components/PriceFilter";
import ColorFilter from "./components/ColorFilter";

import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Filter</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <SizeFilter />
              <ColorFilter />
              <PriceFitler />
              <hr />
              <Products />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
