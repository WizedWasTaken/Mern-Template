import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/NavBar";
import { AuthContext, UserContext } from "../lib/contexts";
import React, { useState } from "react";

export default function Root() {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const storedUser = sessionStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="flex flex-col h-screen">
          <div id="sidebar">
            <Sidebar />
          </div>
          {/* Prevent overflow */}
          {/* TODO: Might cause issues later */}
          {/* Update ^^ - did cause issues 💀 */}
          <div id="container" className="flex-grow ">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
