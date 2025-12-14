

import { useState } from "react";
import Card2 from "./components/Card2.jsx";
import Cart2 from "./components/Cart2.jsx";

 const products = [
    {
      "id": 1,
      "name": "Laptop",
      "price": 500,
    },
    {
      "id": 2,
      "name": "Smartphone",
      "price": 250,
    },
    {
      "id": 3,
      "name": "Headphones",
      "price": 200,

    },
    {
      "id": 4,
      "name": "Smartwatch",
      "price": 500,
    },
  ]

function MiniShoppingCart() {
  
  const [cart,setCart] = useState([]);
  
  const addToCart = (product) =>{
    const isexist = cart.some((item)=>item.id === product.id);
    if(!isexist){
      setCart(prev=>[...prev,{ ...product, qty: 1 }])
    }else{
      setCart(prev=>prev.map((item)=> item.id ===product.id ? {...item,qty:item.qty+1}:item ))
    }
  }


  const removeToCart =(id)=>{
    setCart(prev=>prev.filter((prod)=>prod.id !== id));
  }

  const increaseQty=(id)=>{
    setCart(prev=>prev.map((item)=> item.id ===id ? {...item,qty:item.qty+1}:item ))
  }
 const decreaseQty = (id)=>{
    setCart(prev=>prev.map((item)=>( item.id ===id && item.qty > 1 ) ? {...item,qty:item.qty-1}:item ))
 }

    console.log("products cart",cart);
    
  return (
    <>
    <nav>
      <ul className="flex gap-4 p-4 mb-4 cursor-pointer bg-blue-500 font-semibold text-xl text-white">
      <h1>MixProducs </h1>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Cards</li>
      </ul>
    </nav>
    <div className="flex justify-center align-middle flex-wrap ">
      {
        products.map((product)=>(
          <Card2 key={product.id} product={product} addToCart={addToCart} />
        ))
      }
    </div>
      <Cart2 cart={cart} removeToCart={removeToCart} decreaseQty={decreaseQty} increaseQty={increaseQty} />
    </>
  )
}
export default MiniShoppingCart;





