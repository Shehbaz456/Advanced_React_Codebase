
function Card2({product,addToCart}) {    
  return (
     <div className="min-w-2/12 bg-gray-400 rounded-2xl gap-4 m-4 p-3">
        <div className="p-2">
          <p>ID: {product.id}</p>
          <h2>Name: {product.name}</h2>
          <p>Price: {product.price}</p>
          <div className="flex gap-3 mt-5">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-200 p-2 rounded-xl"
              > ➕</button>
          </div>
        </div>
      </div>
  )
}

export default Card2
