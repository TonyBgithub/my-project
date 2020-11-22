import React, { useEffect } from "react";
// import axios from "axios";
//Instead of fetching data from the frontend (data.js), when axios is installed, fetch data from the backend:
// import data from "../data";
import Product from "../components/Product";
import LoadingBox from "../components/MessageBox";
import MessageBox from "../components/LoadingBox";
import { useDispatch, useSelector } from 'react-redux';
import listProducts from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch(); //allows us to dispatch any action inside our react components.
  //useSelector is a function from react-redux that 
  const productList = useSelector( state => state.productList);
  const { loading, error, products} = productList;
  

  /* ******************************************************************
  // Code below commented out since we are using the redux store instead of hooks inside components.
  const [products, setProducts] = useState([]);

  //Loading while fetching data:
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 
  ****************************************************************** */

  
  //useEffect is a hook that tells React that your components needs to do something after Render.
  //By default, it runs both after the first render and after every update.
  //useEffect accepts a function and an array. The array is the list of dependencies. Here there is none.

  useEffect(() => {
    dispatch(listProducts()) //getting data from backend through an action instead of writing the request here using axios.
  }, []);

  //We are showing the home screen so we imported all the cards inside the main tag
  return (
    <div>
      {/* depending on state (loading and error) change what is rendered*/}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {/* once backend array is transformed into data, remove "data." before products.map because we are using state 
      Remember to restart server after this, because we added the proxy in package.json.
      Then open browser, inspect page and go to Network tab. Click products on the left panel and go to the Preview tab. 
      The array of products should be there.
      */}
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
