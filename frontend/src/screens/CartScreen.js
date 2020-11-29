import React from 'react'

export default function CartScreen(props) {
    const productId = props.params.match.id;
    //Get the number selected by the user. otherwise add 1 item to cart(default)
    //split the search and get the second value (which is the quantity entered by the user inside ProductScreen).
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    return (
        <div>
           <h1>Cart Screen</h1> 
           <p>add to cart: productID: {productId} Qty: {qty}</p>
        </div>
    )
}
