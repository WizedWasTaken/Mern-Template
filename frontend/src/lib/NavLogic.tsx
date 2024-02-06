// NavLogic.tsx
import { useContext, useEffect, useState } from "react";
import { AuthContext, UserContext } from "./contexts";

const useNavLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const handleUserSession = () => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        const { user } = JSON.parse(storedUser);
        setUser(user);
      }
    };

    handleUserSession();
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(undefined);
    setLoggedIn(false);
  };

  return { isOpen, setIsOpen, isLoggedIn, user, handleLogout };
};

export default useNavLogic;
