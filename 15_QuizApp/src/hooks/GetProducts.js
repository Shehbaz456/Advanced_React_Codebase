import React, { useEffect, useState } from 'react'
import axios from "axios";
function useProducts() {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

 async function fetchProducts(){
    setLoading(true);
    try {
        let res = await axios("https://dummyjson.com/products");
        console.log("res",res);
        console.log("res res.data.products", res.data.products);
        if(!res.status===200){
            throw new Error("Failed to Fetch Products")
        }
        setProducts(res.data.products);
        setLoading(false); 
    } catch (err) {
        setError(err.message);
        console.log("Erorr fail to fetch products",err.message);
    } finally{
        setLoading(false);

    }
}
  useEffect(()=>{
    fetchProducts();
  },[])
  return {products,loading,error}
}

export default useProducts
