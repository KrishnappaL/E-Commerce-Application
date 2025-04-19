import axios from "axios";

const url ="http://localhost:8081/api/products";

export const getproducts=() => axios.get(url)

export const cartProducts =() => axios.get("http;//localhost:8081/api/cart")

//api call =>axios

export const sendtocart = (cartItems) => {
   return axios.post(
       "http://localhost:8081/api/cart/add",
       cartItems,
        {
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )
}

export const deleteFromCart = (productid) => {
return axios.delete(`http://localhost:8081/api/cart/product/${productid}`);
}