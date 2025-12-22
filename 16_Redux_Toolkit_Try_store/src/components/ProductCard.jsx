import { useDispatch, useSelector } from "react-redux";
import { addItem,removeCart } from "../Store/slice";

function ProductCard({ id,title, description, price, image }) {
  const dispatch = useDispatch();
  const Cartlist = useSelector(state=>state.cart.list);
  const isItemExist = Cartlist.some(item=>item.id===id);
  
  const handleClickbtn =()=>{
    if(isItemExist){
      dispatch(removeCart(id))
    }else{
      dispatch(addItem({id,title, description, price, image }));
    }
  }
   
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-indigo-600">
            ${Number(price.toFixed(2))}
          </span>

          <button
            onClick={handleClickbtn}
            className={` ${isItemExist ? "text-red-600 hover:text-red-700 underline" : "bg-indigo-600 hover:bg-indigo-700 text-white"}  px-4 py-2 rounded-lg font-medium  transition`}
          >
             { isItemExist ? "Remove to Cart" :"Add to Cart" }
           
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
