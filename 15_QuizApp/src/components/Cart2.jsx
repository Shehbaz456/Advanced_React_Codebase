function Cart2({ cart, removeToCart, increaseQty, decreaseQty }) {
  console.log("cart 2 child", cart);
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Cart Items</h3>
      {cart.length === 0 && (
        <p className="text-center mt-5 font-bold">No items Found</p>
      )}
        <div className="flex justify-center flex-wrap">
          {cart.map((item) => (
            <div
              key={item.id}
              className="min-w-2/12 bg-gray-200 rounded-2xl gap-4 m-4 p-3"
            >
              <div className="p-2">
                <h2>Name: {item.name}</h2>
                <p>Price: {item.price} ( {item.qty} Qty  = {item.price * item.qty}) </p>
                <div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-semibold">
                      {" "}
                      Qty: {item.qty}
                    </span>
                    <div>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-400 hover:bg-gray-500 cursor-pointer px-3 mx-2 rounded text-2xl"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQty(item.id)}
                        disabled={item.qty === 1}
                        className="bg-gray-400 hover:bg-gray-500  disabled:bg-gray-300 cursor-pointer px-3 mx-2 rounded text-2xl"
                      >
                        {" "}
                        -{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => removeToCart(item.id)}
                    className="bg-red-200 p-2 rounded-xl"
                  >
                    {" "}
                    ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-2xl mt-3">
            Total item quantity: {cart.reduce((acc,prod)=> acc + prod.qty,0)};
            Total price : { cart.reduce((acc,prod)=> acc + prod.price*prod.qty,0) }
        </div>
      </div>
  );
}

export default Cart2;

