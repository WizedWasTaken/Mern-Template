import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Types
import { ErrorType, UserType } from "../../lib/definitions";

function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL as string;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }

    if (isLoggedIn) {
      fetch(`${apiUrl}/users`)
        .then((response: Response) => response.json())
        .then((data: UserType[]) => {
          console.log("Success:", data);
          setUsers(data);
        })
        .catch((error: ErrorType) => {
          console.error("Error:", error);
        });
    }
  }, [apiUrl, isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <div className="flex flex-col items-center justify-center h-full bg-gray-200">
        <h1 className="mb-6 text-5xl font-bold text-gray-700">Users</h1>
        {users.map((user) => (
          <div
            key={user.username}
            className="p-6 mb-4 bg-white rounded shadow-md w-80"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              {user.username}
            </h2>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Roller: {user.roles}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default UsersPage;