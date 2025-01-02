import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaFileAlt, FaStar } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import DashboardCard from "./DasCard";
import axios from "axios";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    eventCount: 0,
    blogCount: 0,
    inquiryCount: 0,
    ratingCount: 0,
  });

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get("http://localhost:5500/api/dashboard/dashboard-counts", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setCounts(response.data); 
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []); // Empty array ensures the effect runs only once when the component mounts

  return (
    <div className="p-8">
      {/* Grid Layout for Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard
          title="Total Events"
          count={counts.eventCount}
          icon={<FaCalendarAlt />}
        />
        <DashboardCard
          title="Total Blogs"
          count={counts.blogCount}
          icon={<FaFileAlt />}
        />
        <DashboardCard
          title="Total Inquiries"
          count={counts.inquiryCount}
          icon={<FaUserGear />}
        />
        <DashboardCard
          title="Total Ratings"
          count={counts.ratingCount}
          icon={<FaStar />}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Link to="/admin/blogs-post">
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            + New Blog
          </button>
        </Link>
        <Link to="/admin/events-post">
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            + New Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
