// import Card from './Card'
// function Cart({cart,setCart}) {
//   console.log("cart Cart  : ",cart);
  
//   return (
//     <>
//      <h3 className="text-center text-2xl font-bold" >Cart Items</h3>
//     { cart.length === 0 && <p className='text-center mt-5 font-bold'>No items Found</p> }
//     <div className="flex justify-center align-middle flex-wrap  ">
//     { 
//       cart.map((product)=>(
//         <Card  key={product.id} cart={cart}  product={product}  setCart={setCart} />
//       )
//       )
//     }
//     </div>
//     </>
//   )
// }
// export default Cart








// import Card from "./Card";

// function Cart({cart, removeFromCart ,increaseQty,decreaseQty }) {

//   return (
//     <>
//       <h3 className="text-center text-2xl font-bold">Cart Items</h3>

//       {cart.length === 0 && (
//         <p className='text-center mt-5 font-bold'>No items Found</p>
//       )}
//         <div className="flex justify-center flex-wrap">
//         {cart.map((item) => (
//           <div  key={item.id} className="bg-gray-200 p-4 m-3 rounded-xl min-w-64" >
//             <h2>{item.name}</h2>
//             <p>Price: {item.price * item.qty}</p>
//             {/* Qty Buttons */}
            // <div className="flex items-center justify-between mt-3">
            //  <span className="text-xl font-semibold" >  Qty: {item.qty}</span>
            //  <div>
            //   <button
            //     onClick={() => increaseQty(item.id)}
            //     className="bg-gray-400 hover:bg-gray-500 cursor-pointer px-3 mx-2 rounded text-2xl"
            //   >+</button>

//               <button onClick={() => decreaseQty(item.id)} 
//               disabled={item.qty===1}
//                 className="bg-gray-400 disabled:bg-gray-300 hover:bg-gray-500 cursor-pointer px-3 mx-2 rounded text-2xl" > -  </button>
//              </div>
//             </div>

//             {/* Remove */}
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="bg-red-200 p-2 mt-3 rounded-xl">❌</button>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-5 ">
//       <div>
//         <h1>Total Item : {cart.length} </h1>
//         <h1>Total Total Price {
//           cart.reduce((acc,item)=>acc + item.price*item.qty,0)
//           } </h1>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Cart;





