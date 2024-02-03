import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/NavBar";

export default function Root() {
  return (
    <div className="flex flex-col h-screen">
      <div id="sidebar">
        <Sidebar />
      </div>
      {/* Prevent overflow */}
      {/* TODO: Might cause issues later */}
      <div id="container" className="flex-grow ">
        <Outlet />
      </div>
    </div>
  );
}
