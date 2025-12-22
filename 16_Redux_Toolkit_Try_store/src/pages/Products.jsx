import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { clearCartItem } from "../Store/slice";


const products = [
  {
    id: 5,
    title: "Laptop",
    description: "High performance laptop for work, coding, and entertainment.",
    price: 69999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with high DPI and RGB lighting.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Mechanical Keyboard",
    description: "Mechanical keyboard with tactile switches and backlight.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Smartphone",
    description: "Latest generation smartphone with stunning display and camera.",
    price: 25999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
  },
    {
    id: 9,
    title: "Wireless Earbuds",
    description: "Compact wireless earbuds with deep bass and long battery life.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Tablet",
    description: "Lightweight tablet perfect for reading, browsing, and streaming.",
    price: 18999,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Fitness Band",
    description: "Monitor your steps, sleep, heart rate, and daily activity.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&q=80"
  },
 
  {
    id: 13,
    title: "Backpack",
    description: "Stylish backpack with multiple compartments for daily use.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"
  },
 
  {
    id: 15,
    title: "External Hard Drive",
    description: "Portable external hard drive for secure data backup.",
    price: 5499,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80"
  },
  
  {
    id: 17,
    title: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness and angle.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    title: "Power Bank",
    description: "Fast-charging power bank with high capacity battery.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80"
  }
];


function Products() {
  const dispatch = useDispatch();
  return (
      <div className="bg-gray-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
      <div className="text-xl font-bold ">Cart List </div>
      <button onClick={()=>dispatch(clearCartItem())} className="border-2 p-3 bg-gray-500 rounded-xl" >Clear Cart</button>
      </div>
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
    </div>
  );
}

export default Products;
