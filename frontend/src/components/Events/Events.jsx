import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
  const [events, setEvents] = useState({ previousEvent: [], upcomingEvent: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [page]);

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5500/api/admin/get-events?page=${page}&limit=${limit}`
      );
      const data = response.data || {};
      setEvents({
        previousEvent: data.previousEvent || [],
        upcomingEvent: data.upcomingEvent || [],
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="bg-gray-100 py-24 mt-6 px-6 lg:px-16">
      <div className="container mx-auto space-y-16">
        {loading && <p>Loading events...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl">
            {events.upcomingEvent.length > 0 ? (
              events.upcomingEvent.map((event) => (
                <motion.div
                  key={event._id}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">📅 {new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.eventDetails}</p>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => navigate(`/event-gallery/${event._id}`)}
                  >
                    View Events Photo
                  </button>
                </motion.div>
              ))
            ) : (
              <p>No upcoming events found.</p>
            )}
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.previousEvent.length > 0 ? (
              events.previousEvent.map((event) => (
                <motion.div
                  key={event._id}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">📅 {new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600 mb-2">📍 {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.eventDetails}</p>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => navigate(`/event-gallery/${event._id}`)}
                  >
                    View Events Photo
                  </button>
                </motion.div>
              ))
            ) : (
              <p>No previous events found.</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
