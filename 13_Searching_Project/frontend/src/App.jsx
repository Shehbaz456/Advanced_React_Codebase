import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-lg">Welcome to our product search app.</p>
      <Link  to="/api/products" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
      > Go to Search Products </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-900 text-white flex gap-6">
        <Link to="/">Home</Link>
        <Link to="#">Services</Link>
        <Link to="/api/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/products" element={<SearchProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
