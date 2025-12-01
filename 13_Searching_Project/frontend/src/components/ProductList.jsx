import ProductsCard from "./ProductsCard";

function ProductList({ products }) {

  if(!products || products.length === 0){
    return (
       <div className="max-w-4xl mx-auto text-center py-16 text-gray-600">
        No products found.
      </div>
    )
  }

  return (
     <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductsCard
            key={p.id}
            title={p.title}
            description={p.description}
            category={p.category}
            thumbnail={p.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
