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
          setUsers(data);
        })
        .catch((error: ErrorType) => {
          console.error("Error:", error);
        });
    }
  }, [apiUrl, isLoggedIn, navigate]);

  const deleteUser = (id: string) => {
    fetch(`${apiUrl}/user/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user._id.toString() !== id));
      })
      .catch((error: ErrorType) => {
        console.error("Error:", error);
      });
  };

  return (
    isLoggedIn && (
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-200">
        <h1 className="col-span-full mb-6 text-5xl font-bold text-gray-700">
          Users
        </h1>
        {users.map((user) => (
          <div key={user._id} className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              {user.username}
            </h2>
            <p className="text-gray-700">Email: {user.email}</p>
            <button
              onClick={() => deleteUser(user._id.toString())}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Slet
            </button>
          </div>
        ))}
      </div>
    )
  );
}

export default UsersPage;
