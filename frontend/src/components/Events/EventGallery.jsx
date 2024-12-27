import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Dummy data for the galleries and event names
const eventDetails = {
  1: {
    name: "Tech Expo 2023",
    gallery: [
      { id: 1, src: "https://via.placeholder.com/300", alt: "Tech Expo 2023 - 1" },
      { id: 2, src: "https://via.placeholder.com/300", alt: "Tech Expo 2023 - 2" },
    ],
  },
  2: {
    name: "AI Bootcamp",
    gallery: [
      { id: 1, src: "https://via.placeholder.com/300", alt: "AI Bootcamp - 1" },
      { id: 2, src: "https://via.placeholder.com/300", alt: "AI Bootcamp - 2" },
    ],
  },
  // Add more events as necessary
};

const EventGallery = () => {
  const { eventId } = useParams(); // Get the event ID from the URL
  const event = eventDetails[eventId]; // Fetch the event details by event ID
  const eventGallery = event ? event.gallery : []; // Get the gallery for the event

  return (
    <section className="bg-gray-100 py-24 px-6 lg:px-16">
      <div className="container mx-auto">
        {event ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {event.name} - Event Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventGallery.map((image) => (
                <motion.div
                  key={image.id}
                  className="w-full"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Event not found or no gallery available.</p>
        )}
      </div>
    </section>
  );
};

export default EventGallery;
