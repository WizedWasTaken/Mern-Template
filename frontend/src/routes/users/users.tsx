import { Link } from "react-router-dom";

function UsersPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200">
      <h1 className="mb-6 text-5xl font-bold text-gray-700">
        Enter dashboard to watch users
      </h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default UsersPage;
