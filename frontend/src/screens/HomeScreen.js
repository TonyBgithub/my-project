import React, { useEffect, useState } from "react";
import axios from "axios";
//Instead of fetching data from the frontend (data.js), when axios is installed, fetch data from the backend:
// import data from "../data";
import Product from "../components/Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  //useEffect is a hook that tells React that your components needs to do something after Render.
  //By default, it runs both after the first render and after every update.
  //useEffect accepts a function and an array. The array is the list of dependencies. Here there is none.

    useEffect(() => {
    //since there is no dependency, useEffect will run only one time. That is what we want here.
    //We are sending an ajax request. Ajax is async.
    //Remember to restart server after this, because we added the proxy in package.json.
    const fetchData = async () => {
        //transform the array in the backend into { data } in the frontend.
        //then we update the state with the data we're getting from the backend.
        const { data } = await axios.get("/api/products")
        setProducts(data);
    }
    fetchData();
  }, []);

  //We are showing the home screen so we imported all the cards inside the main tag
  return (
    <div>
      <div className="row center">
      {/* once backend array is transformed into data, remove "data." before products.map because we are using state */}
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
