//import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Board from "./Pages/Board/Board";
import Contact from "./Pages/Contact/Contact";
import Leadership from "./Pages/Leadership/Leadership";
import Services from "./Pages/Sevices/Services";
import AdminLogin from "./Pages/Admin/AdminLogin";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/about", element: <About /> },
      { path: "/board", element: <Board /> },
      { path: "/contact", element: <Contact /> },
      { path: "/leadership", element: <Leadership /> },
      { path: "/services", element: <Services /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
