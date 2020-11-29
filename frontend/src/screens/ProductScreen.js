import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import MessageBox from "../components/LoadingBox";
import LoadingBox from "../components/MessageBox";
import Rating from "../components/Rating";
// import data from "../data";

export default function ProductScreen(props) {
  //No longer filtering data from props but from backend
  // const product = data.products.find((x) => x._id === props.match.params.id);
  // if (!product) {
  //   return <div> Product Not Found </div>;
  // }
  const dispatch = useDispatch();
  const productId = props.match.params.id; //get the id inside the url.
  const [qty, setQty] = useState(1);

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  // useEffect is Equivalent to componentDidMount() and componentDidUpdate()
  //you tell React that your components needs to do sth after render. By default it runs after the first render
  //and after every update.
  //The function passed is the effect.
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    //change route in react app. The path is dynamic.
    props.history.push(`/cart/${productId}?qty=${qty}`) //see CartScreen for details (split)
  }; 

  return (
    <div>
      {/* depending on state (loading and error) change what is rendered*/}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price: ${product.price}</li>
                <p>{product.description}</p>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      {/* empty container because we have two elements next to each another. */}
                      <div classNAme="row">
                        <div>Qty</div>
                        <select
                          value={qty}
                          onChange={e => setQty(e.target.value)}
                        >
                          {
                            // if you have 5 items the Array() constructor (function) returns an array from 0 to 4:
                            [...Array(product.countInStock).keys()].map(x => (
                              <option value={x + 1}>{x + 1}</option>
                            )) //we need to display the array length +1 since we count from 0
                          }
                        </select>
                      </div>
                      <li>
                        <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
