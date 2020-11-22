import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

//Create a store. This store just returns data.products to our frontend.
const initialState = {};

 //insert reducers in redux store.
const reducer = combineReducers({
    productList: productListReducer,
})

//then go to index.js and wrap the app inside a <Provider component>
//Install redux-thunk to send ajax requests in our redux actions.

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
