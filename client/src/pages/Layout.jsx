import React from 'react'
import Navber from '../components/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <Navber/>
        <Outlet/>
    </div>
  )
}
