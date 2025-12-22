import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const prodCount = useSelector((state)=>state.cart.prodCount)  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            Ultimo<span className="text-gray-800">Store</span>
          </div>

          {/* Middle: Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-indigo-600 cursor-pointer">Home</Link>
            <Link to="/checkout" className="hover:text-indigo-600 cursor-pointer">Shop</Link>
            <li className="hover:text-indigo-600 cursor-pointer">Categories</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <div className="relative cursor-pointer">
            <Link to="/checkout">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {prodCount}
              </span>
            </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 py-4 font-medium text-gray-700">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">Shop</li>
            <li className="hover:text-indigo-600 cursor-pointer">Categories</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
