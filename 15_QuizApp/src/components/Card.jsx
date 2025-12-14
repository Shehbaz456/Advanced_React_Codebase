// function Card({ product, setCart, cart }) {
//   const addProductCart = (product) => {
//     if (setCart) {
//       const alreadyExists = cart.some((p) => p.id === product.id);
//       if (alreadyExists) {
//         alert("Already in cart!");
//         return;
//       }
//       setCart((prev) => [...prev, product]);
//     }
//   };
//   const removeProductCart = (product) => {
//     if (setCart) {
//       setCart(cart.filter((prod) => prod.id !== product.id));
//     }
//   };
//   return (
//     <>
//       <div className="min-w-2/12  bg-gray-400 rounded-2xl gap-4 m-4 p-3">
//         <div className="p-2">
//           <p> ID: {product.id}</p>
//           <h2>Name: {product.name}</h2>
//           <p>Price :{product.price}</p>
//           <p>Qty :{product.qty}</p>

//           <div className="flex gap-3 mt-5">
//             <button
//               onClick={() => addProductCart(product)}
//               className="bg-blue-200 p-2 rounded-xl"
//             >
//               ➕
//             </button>
//             <button
//               onClick={() => removeProductCart(product)}
//               className="bg-red-200 p-2 rounded-xl"
//             >
//               ❌
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;






  function Card({ product,addToCart}) {
    return (
      <div className="min-w-2/12 bg-gray-400 rounded-2xl gap-4 m-4 p-3">
        <div className="p-2">
          <p>ID: {product.id}</p>
          <h2>Name: {product.name}</h2>
          <p>Price: {product.price}</p>
          {/* <div className="flex mt-4">
          Qty : 
            <div className="flex">
              <button  className="bg-gray-200 p-3 rounded-2xl mx-2 cursor-pointer">{+1}</button>
              <button className="bg-gray-200 p-3 rounded-2xl mx-2 cursor-pointer">{-1}</button>
            </div>
          </div> */}

          <div className="flex gap-3 mt-5">
          
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-200 p-2 rounded-xl"
              >
                ➕
              </button>
             
          
          </div>
          

        </div>
      </div>
    );
  }

export default Card;
