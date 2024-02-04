import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="px-10 py-6 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="text-white text-2xl font-bold hover:text-gray-300"
            >
              Template
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:flex items-center ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              className="my-1 text-sm text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Hjem
            </Link>
            <Link
              to="/users"
              className="my-1 text-sm text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Brugere
            </Link>
            <Link
              to="/contact"
              className="my-1 text-sm text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Kontakt Os
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Log Ind
          </Link>
        </div>
      </div>
    </nav>
  );
}
