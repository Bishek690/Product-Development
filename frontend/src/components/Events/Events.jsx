import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Updated upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "AI Innovations Conference 2024",
    date: "January 15, 2024",
    location: "Kathmandu, Nepal",
    description:
      "A global event focusing on the latest advancements in artificial intelligence and machine learning.",
  },
  {
    id: 2,
    title: "Tech Leaders Summit",
    date: "January 20, 2024",
    location: "Virtual Event",
    description:
      "Join industry leaders to discuss the future of technology and innovation.",
  },
  {
    id: 3,
    title: "Startup Growth Hackathon",
    date: "February 10, 2024",
    location: "Tech Park, Kathmandu",
    description:
      "An intensive hackathon event for startups to showcase their ideas and win funding opportunities.",
  },
  {
    id: 4,
    title: "Future of FinTech Summit",
    date: "February 18, 2024",
    location: "Pokhara, Nepal",
    description:
      "An event to explore innovations in financial technology and discuss strategies for future growth.",
  },
];

// Dummy data for past events
const pastEvents = [
  {
    id: 1,
    title: "Tech Expo 2023",
    date: "November 20, 2023",
    location: "Pokhara, Nepal",
    description: "An event to explore the latest technologies and innovations.",
  },
  {
    id: 2,
    title: "AI Bootcamp",
    date: "October 10, 2023",
    location: "Kathmandu, Nepal",
    description:
      "An intensive bootcamp focused on artificial intelligence and machine learning.",
  },
];

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-24 mt-6 px-6 lg:px-16">
      <div className="container mx-auto space-y-16">
        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
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
                <p className="text-sm text-gray-600 mb-1">
                  📅 {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => navigate("/event-gallery/${event.id}")}
                >
                  View Events Photo
                </button>                
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <motion.div
                key={event.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-600 mb-2">
                  📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => navigate("/event-gallery/${event.id}")}
                >
                  View Events Photo
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
