import Axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"


const listProducts = () => async (dispatch) =>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
         //fetch data from backend
        const { data } = await Axios.get("/api/products");
        
        //dispatch another action, we change the state of redux and based on that we can update the homescreen and show products.
        //payload contains data from the backend
        //the payload is the part of transmitted data that is the actual intended message.
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload:error.message })
    }
}

export default listProducts;