import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import Header from "../Admin/Header";
import AdminLogin from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";
import EventPost from "../Admin/EventPost";
import BlogPost from "../Admin/BlogPost";
import Inqueries from "../Admin/ViewInquiry";
import ViewEvent from "../Admin/ViewEvents";
import ViewBlog from "../Admin/ViewBlogs";
import Feedback from "../Admin/Feedback";
import ProtectedRoute from "./ProtectedRoutes";

const AdminRoutes = () => {
  const isAdmin = true; 
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin/login"; 

  return (
    <div className={`flex ${isLoginPage ? "" : "flex-row"}`}>
      {!isLoginPage && <Sidebar />}
      <div className="flex-1">
        {!isLoginPage && <Header />}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/events-post" element={ <EventPost />} />
          <Route path="/admin/blogs-post" element={ <BlogPost /> } />
          <Route path="/admin/view-inquiries" element={ <Inqueries /> }/>
          <Route  path="/admin/view-events" element={ <ViewEvent /> }/>
          <Route path="/admin/view-blogs" element={ <ViewBlog /> } />
          <Route path="/admin/feedback" element={ <Feedback /> } />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
