import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 h-15 bg-blue-500">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/">MERN TEMPLATE</Link>
      </h1>
      <div>
        <Link className="text-white hover:text-blue-200 mr-4" to="/">
          Home
        </Link>
        <Link className="text-white hover:text-blue-200 mr-4" to="/users">
          Users
        </Link>
        <Link className="text-white hover:text-blue-200" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
