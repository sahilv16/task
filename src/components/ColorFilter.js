import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actions/productActions";

class ColorFilter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <label>
            {" "}
            Filter Color
            <select
              className="form-control"
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  this.props.size,
                  event.target.value,
                  this.props.minPrice,
                  this.props.maxPrice
                );
              }}
            >
              <option value="">ALL</option>
              <option value="black">Black</option>
              <option value="grey">Grey</option>
              <option value="blue">Blue</option>
              <option value="white">White</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  minPrice: state.products.minPrice,
  maxPrice: state.products.maxPrice,
  size: state.products.size,
});

export default connect(mapStateToProps, {
  filterProducts,
})(ColorFilter);
