import { useProducts } from "./hooks/useProducts";
import ProductList from "./components/ProductList";
import { debounce } from "./utils/debounce";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(defaultSearch);

  const debouncedSearch = useMemo(() => {
    return debounce((value) => {
      setSearch(value);
      setSearchParams({ search: value });
      console.log("searched:", value);
    }, 1000);
  }, [setSearchParams]);

  function handleInput(e) {
    debouncedSearch(e.target.value);
  }

  const { products, loading, error } = useProducts(search);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Search Products</h1>
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          defaultValue={defaultSearch}
          placeholder="Search by title & category..."
          onChange={handleInput}
          className="w-full bg-white p-3 rounded-xl shadow"
        />
      </div>
      {loading && <p className="text-center text-xl m-3">Products Loading...</p>}
      {error && ( <p className="text-center text-red-500">Something went wrong!</p> )}
      <ProductList products={products} />
    </div>
  );
}

export default SearchProduct;
