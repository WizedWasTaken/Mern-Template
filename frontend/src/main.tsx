import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Tailwind CSS
import "./index.css";

// Page Imports
import Root from "./routes/root";
import ErrorPage from "./error-page";
// Pages
import Contact from "./routes/contact/contact";
import Users from "./routes/users/users";
import Dashboard from "./routes/dashboard/dashboard";
import LoginPage from "./routes/login/login";
import SignupPage from "./routes/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="h-screen">
    <RouterProvider router={router} />
  </div>
);
