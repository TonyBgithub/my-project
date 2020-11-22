const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/productConstants");

//remember to set default state or you'll get an error. Should be an empty array.
export const productListReducer = (state = {loading: true, products: []}, action) => {
    //PRODUCT_LIST_REQUEST, SUCCESS, or FAIL are action types.
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            //return new state
            //when we dispatch a request action, we're sending an ajax request to backend, 
            //and we're waiting for a repsonse so we need loading.
            return { loading: true } 
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
            //cuz when dispatch of action is successful, the payload is set as data from backend.
            //get products (variable in redux store) by the data we get from backend.
        case PRODUCT_LIST_FAIL:
            //when dispatch of action fails, return error message.
            return { loading: false, error: action.payload }
        default:
            return state; //don't change state at all and return the previous state.
        }

}