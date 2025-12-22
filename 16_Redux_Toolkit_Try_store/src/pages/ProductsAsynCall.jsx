import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {clearCartItem} from "../Store/slice";
import { fetchProducts } from "../Store/productSlice";

function ProductsAsynCall() {
   const dispatch = useDispatch();
   const {entities,ids,loading,error} = useSelector(state=>state.products);
   console.log("list is :",entities);
   console.log("list ids:",ids);

   const list = ids.map(id=>entities[id])
   
   useEffect(()=>{
    dispatch(fetchProducts());
   },[dispatch])

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
      <div className="bg-gray-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
      <div className="text-xl font-bold ">Cart List </div>
      <button onClick={()=>dispatch(clearCartItem())}  className="border-2  p-3 bg-gray-500 rounded-xl" >Clear Cart</button>
      </div>
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {list.map(product => (
        <ProductCard
          key={product.id}
           id={product.id}
           title={product.title} 
           description={product.description}
           price={product.price}
           image = {product.thumbnail}
        />
      ))}
    </div>
    </div>
  );
}

export default ProductsAsynCall;
