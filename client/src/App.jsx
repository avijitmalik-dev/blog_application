import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Hero from "./pages/Hero";
import Form from "./pages/Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {path:"/hero", element:<Hero/>},
        {
          path: "/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },{path:"/form", element: <Form/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
