import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const EventGallery = () => {
  const { eventId } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null); // State to store event data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:5500/api/admin/get-event/${eventId}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setEvent(data.event); // Set the event data to state
      } catch (err) {
        console.error("Error fetching event data:", err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-16">
      <div className="container mx-auto">
        {event ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {event.title} - Event Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={`Event image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <p className="text-white text-lg font-semibold">Image {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No gallery available for this event.
          </p>
        )}
      </div>
    </section>
  );
};

export default EventGallery;
