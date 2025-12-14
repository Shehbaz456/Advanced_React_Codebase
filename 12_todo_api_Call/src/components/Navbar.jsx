import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          UsersMax
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/user" className="hover:text-blue-600">User</Link>
          <Link to="/posts" className="hover:text-blue-600">All Posts</Link>
          <Link to="/user_scroll" className="hover:text-blue-600">Users Scroll</Link>
        </div>

        {/* CENTER SEARCH BAR (Desktop Only) */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              placeholder="Search by name or location..."
              className="w-full border-2 border-blue-500 px-4 py-2 pl-10 rounded-full shadow-sm focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-gray-500 text-lg">🔍</span>
          </div>
        </div>

        {/* NAV LINKS + BUTTONS (Desktop Only) */}
        <div className="hidden md:flex items-center gap-6">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-4">

          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 pl-10 rounded-lg shadow-sm focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-gray-500 text-lg">🔍</span>
          </div>

          <Link to="/" className="block text-lg" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/user" className="block text-lg" onClick={() => setOpen(false)}>Users</Link>
          <Link to="/posts" className="block text-lg" onClick={() => setOpen(false)}>posts</Link>
          <Link to="/about" className="block text-lg" onClick={() => setOpen(false)}>About</Link>

          <button className="w-full px-4 py-2 border rounded-lg hover:bg-gray-100">
            Login
          </button>

          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
