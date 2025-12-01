import { useEffect,useState } from 'react';
import axios from 'axios';
export const useProducts =(search) => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
   async function fetchProduct(){
        try {
            setLoading(true);
            let Response  = await axios('/api/products',{ params: { search: search}});
            console.log("res use api hook: ",Response);
            if(Response.statusText !== 'OK'){
                throw new Error(`failed to load products`)
            }
            setProducts(Response.data);

        } catch (err) {
            console.log("Erorr",err);
            setError(err);
        }finally{
            setLoading(false);
        }
    }
    fetchProduct();
  },[search])
  
  return {products,loading,error}
}
