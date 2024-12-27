import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import About from "../About/About";
import ContactUs from "../Contact/Contact";
import Achievements from "../Achievements/Achievements";
import Events from "../Events/Events";
import EventGallery from "../Events/EventGallery";
import BlogsPage from "../Blogs/Blogs";
import PastSolutions from "../PastSolutions/PastSolutions";
import Testimonial from "../Testimonial/Testimonial";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event-gallery/:eventId" element={<EventGallery />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/past-solutions" element={<PastSolutions />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  );
};

export default AppRoutes;
