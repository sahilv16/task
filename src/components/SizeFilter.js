import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class SizeFilter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <label>
            {" "}
            Filter Size
            <select
              className="form-control"
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value,
                  this.props.color,
                  this.props.minPrice,
                  this.props.maxPrice
                );
              }}
            >
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  color: state.products.color,
  minPrice: state.products.minPrice,
  maxPrice: state.products.maxPrice,
});

export default connect(mapStateToProps, { filterProducts, sortProducts })(
  SizeFilter
);
