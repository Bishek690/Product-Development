// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Get token from localStorage
  const token = localStorage.getItem('adminToken');
  
  // If there's no token, redirect to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;