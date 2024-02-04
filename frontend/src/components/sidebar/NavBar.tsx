import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MERN TEMPLATE</Link>
        </div>
        <div className="hidden md:flex">
          <Link className="text-white hover:text-blue-200 mx-2" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-blue-200 mx-2" to="/users">
            Users
          </Link>
          <Link className="text-white hover:text-blue-200 mx-2" to="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-8-8a1 1 0 011.414-1.414l8 8z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-2 pt-2 pb-4 md:hidden">
          <Link
            className="block px-2 py-1 text-white hover:text-blue-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block px-2 py-1 text-white hover:text-blue-200"
            to="/users"
          >
            Users
          </Link>
          <Link
            className="block px-2 py-1 text-white hover:text-blue-200"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
