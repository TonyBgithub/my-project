import Axios from "axios";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

//redux thunk lets us call action creators that return a function instead of an action object.
//That function receives the store's dispatch method which is then used to dispatch regular synchronous
//actions inside the function's body once the asynchronous operations have been completed.

//listProducts is an action creator. That action is a function. redux thunk allows us to use actions
//that are functions, not just javascript objects.
export const listProducts = () => async dispatch => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    //fetch data from backend
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

//Fetching data from backend to update data from one product.
export const detailsProduct = productId => async dispatch => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`); //since Axios is asyncrhonous and returns a promise, we need to use await.
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    //Send the reponse's error message. If it does not exist just send a regular error message.
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
