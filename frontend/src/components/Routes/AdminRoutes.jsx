import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
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

const AdminRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin/login";

  return (
    <div className={`flex ${isLoginPage ? "" : "flex-row"}`}>
      {!isLoginPage && <Sidebar />}
      <div className="flex-1">
        {!isLoginPage && <Header />}
        <Routes>
          {/* Public route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/events-post"
            element={
              <ProtectedRoute>
                <EventPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs-post"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/view-inquiries"
            element={
              <ProtectedRoute>
                <Inqueries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/view-events"
            element={
              <ProtectedRoute>
                <ViewEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/view-blogs"
            element={
              <ProtectedRoute>
                <ViewBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;