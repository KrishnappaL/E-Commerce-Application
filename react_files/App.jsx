import { useEffect, useState } from 'react';
import {  getproducts } from './api';
import './App.css';
import ProductCard from './components/ProductCard';
import { useCart } from './components/CartProvider';
import { useNavigate } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([])
  const {cart , deleteCartItems,addtocart} =useCart();
  
  const navigate=useNavigate();
  useEffect(() => {
    getproducts().then((res) => setProducts(res.data))
      .catch((error) => console.error("error :", error))
  }, [])
  return (
    <div className="content">

      <div className='container'>
        {
          products.map((product) => (
            <ProductCard items={product} addtocart={addtocart} />
          ))
        }

      </div>
      <div className='right-cart'>
        <h1>Cart</h1>
        <button className="view-cart" onClick={() => navigate("/cart")}>View Cart</button>
        <ul>
          {
            cart.map((item) => (
              <li>
                <img src={item.product.img} alt=" " className='prodimg' height='100px' />
                {item.product.name} - {item.quantity}
                <button onClick={() => deleteCartItems(item.product.id)}>remove</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
