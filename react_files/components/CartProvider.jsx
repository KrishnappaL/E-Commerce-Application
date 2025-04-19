import React, { useContext, useEffect, useState } from "react"
import { cartProducts, deleteFromCart, sendtocart } from '../api';

const cartContext = createContext();
export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        cartProducts().then((res) => setCart(mergeProducts(res.data)))
            .catch((error) => console.error("error :", error))
    }, [])

    const mergeProducts = (data) => {
        const merged = {};
        data.forEach((item) => {
            const productId = item.product.id;
            if (merged[productId]) {
                merged[productId] += item.quantity;
            } else {
                merged[productId] = { ...item }
            }
        });
        return Object.values(merged)
    }
    //cart
    const addtocart = (product) => {
        // setCart((preCart) => [...preCart, product]);
        const cartItems = {
            productId: product.id,
            quantity: 1
        }
        sendtocart(cartItems).then(() => {
            cartProducts().then((res) => setCart(mergeProducts(res.data)))
                .catch((error) => console.error("error :", error))
        })
        // alert('hii')
    }

    //delete from cart
    const deleteCartItems = (productid) => {
        deleteFromCart(productid).then(
            () => {
                cartProducts().then((res) => setCart(mergeProducts(res.data)))
                    .catch((error) => console.error("error :", error))
            })
    }
    return (
        <div>
            <cartContext.Provider value={{ cart, deleteCartItems, addtocart }}>
                {children}
            </cartContext.Provider>
        </div>
    )
}

export const useCart = () => useContext(cartContext);