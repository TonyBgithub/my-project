const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
} = require("../constants/productConstants");

//remember to set default state or you'll get an error.

//Basir mutates the objects in his tutorial. I inserted  ...state in the reutrned objects so that I don't mutate the original state.
export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  //PRODUCT_LIST_REQUEST, SUCCESS, or FAIL are action types.
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      //and we're waiting for a repsonse from our backend so we need loading.
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {  ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return {  ...state, loading: false, error: action.payload };
    default:
      return state; //don't change state and return the previous state if state hasn't changed.
  }
};

export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {  ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS: {
      return {  ...state, loading: false, product: action.payload };
    }
    case PRODUCT_DETAILS_FAIL: {
      return {  ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
