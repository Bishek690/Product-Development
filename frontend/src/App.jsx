import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/Routes/AppRoutes";
import AdminRoutes from "./components/Routes/AdminRoutes";

function App() {
  const location = useLocation(); 
  const isAdminRoute = location.pathname.startsWith("/admin"); 

  return (
    <div>
        {isAdminRoute ? (
          <AdminRoutes />
        ) : (
          <>
            <Navbar />
            <AppRoutes />
            <Footer />
          </>
        )}
    </div>
  );
}

export default App;
