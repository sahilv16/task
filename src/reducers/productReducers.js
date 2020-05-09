import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  ORDER_PRODUCTS_BY_PRICE,
} from "../actions/types";

const initState = {
  items: [],
  filteredItems: [],
  size: "",
  sort: "",
  minPrice: 0,
  maxPrice: 1000,
  color: "",
};
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        color: action.payload.color,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
}
