//import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Board from "./Pages/Board/Board";
import Contact from "./Pages/Contact/Contact";
import Leadership from "./Pages/Leadership/Leadership";
import Services from "./Pages/Sevices/Services";
import AdminLogin from "./Pages/Admin/AdminLogin";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminPosts from "./Pages/Admin/AdminPosts";
import AdminCreatePost from "./Pages/Admin/AdminCreatePost";
import AdminEditPost from "./Pages/Admin/AdminEditPost";
import AdminContacts from "./Pages/Admin/AdminContacts";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean | null>(null);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
      } catch (error) {
        console.log("토큰 인증 실패", error);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
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
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path:"posts", element: <AdminPosts /> },
      { path:"create-post", element: <AdminCreatePost /> },
      { path:"edit-post/:id", element: <AdminEditPost /> },
      { path:"contacts", element: <AdminContacts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
