import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeCart } from "../Store/slice";


function CheckoutCard({ id,image, title, description, price, quantity }) {
  const dispatch =useDispatch();

  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-md">
      <div className="w-24 h-24 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <p className="text-indigo-600 font-bold mt-1">
          ₹{price} X {quantity} = {(price*quantity).toFixed(2)} 
        </p>
      
        <button onClick={()=>dispatch(removeCart(id))}   className=" w-fit text-red-400 underline cursor-pointer p-2 rounded-2xl" >Remove Item</button>
      </div>

      {/* Right: Quantity */}
      <div className="flex items-center justify-center gap-2">
        <button onClick={()=>dispatch(decrementQty(id))} className={`${quantity===1?"bg-gray-400":"cursor-pointer"}  w-8 h-8 border rounded-lg`}>−</button>
        <span className="font-semibold">{quantity}</span>
        <button  onClick={()=>dispatch(incrementQty(id))}  className="w-8 h-8 border rounded-lg cursor-pointer">+</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
