import React from "react";
import { useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";

function Checkout() {
  const CartproductList = useSelector(state => state.cart.list);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">Checkout</h2>
          {CartproductList.length === 0 && (
            <p className="text-gray-600">Your cart is empty</p>
          )}
          {CartproductList.map(product => (
            <CheckoutCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.qty}
            />
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Items</span>
            <span>{CartproductList.length}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Total Quentity</span>
            <span>{
              CartproductList.reduce((acc,prod)=> acc += prod.qty,0)
            }</span>
          </div>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{(CartproductList.reduce((acc,prod)=> acc += prod.qty * prod.price,0)).toFixed(2)} </span>
          </div>

          <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
