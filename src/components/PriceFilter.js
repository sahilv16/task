import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { connect } from "react-redux";

import { filterProducts } from "../actions/productActions";

const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

function valuetext(value) {
  return `₹${value}`;
}

function PriceFilter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterByPrice = (e, value) => {
    props.filterProducts(
      props.products,
      props.size,
      props.color,
      value[0],
      value[1]
    );
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <b style={{ fontSize: "1.3em" }}>Price Filter</b>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        onChangeCommitted={filterByPrice}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  color: state.products.color,
  size: state.products.size,
});

export default connect(mapStateToProps, { filterProducts })(PriceFilter);
