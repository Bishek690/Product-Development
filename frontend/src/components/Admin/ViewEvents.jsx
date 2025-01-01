import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ViewEventPage = () => {
  const [events, setEvents] = useState({ previousEvent: [], upcomingEvent: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5500/api/admin/get-events");
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

  const handleDelete = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`http://localhost:5500/api/admin/delete-event/${eventId}`);
        alert("Event deleted successfully.");
        fetchEvents(); // Refresh the events list after deletion
      } catch (err) {
        alert(err.response?.data?.message || "Failed to delete the event.");
      }
    }
  };

  return (
    <section className="bg-white py-2 mt-6 px-6 lg:px-16">
      <div className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Event List
        </h2>

        {loading && <p>Loading events...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Upcoming Events Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                {/*  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition float-right"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>*/}
                </motion.div>
              ))
            ) : (
              <p className="text-center">No upcoming events found.</p>
            )}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Past Events
          </h3>
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
               {  /* <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition float-right"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>*/}
                </motion.div>
              ))
            ) : (
              <p className="text-center">No past events found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewEventPage;
