import React, { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

export default function CartPage(){
   const {cart,deleteCartItems}= useCart();
   const [total,setTotal] =useState(0);
   useEffect(() =>{
    const newTotal=cart.reduce((sum,item) => sum+item.product.price*item.quantity,0);
    setTotal(newTotal)
   },[cart])
    return(
        <div>
            <h1 className="cart-headding"> Cart Items </h1>
            <ul className="cart-page">
                {
                cart.map((item) => (
                  <li>
                    <img src="{item.product.img}" alt="" className="prodimg"/>
                    <p> {item.product.description}</p>
                    {item.product.name} - {item.quantity}
                    <h3>{item.product.price * item.quantity}</h3>
                    <button onClick={ () => deleteCartItems(item.product.id)}>remove</button>

                  </li>  
                ))
                }
                <h2>Total Amount: {total}</h2>
            </ul>
        </div>
    )
}