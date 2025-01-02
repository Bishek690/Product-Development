import React, { useState } from "react";
import axios from "axios";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const { name, email, phone, jobDetails } = formData;
    if (!name || !email || !phone || !jobDetails) {
      return "Please fill out all required fields.";
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5500/api/contact/contact",
        formData
      );
      setSuccessMessage("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
      });
    } catch (err) {
      const message =
        err.response?.data?.error || "Failed to submit inquiry. Please try again.";
      setError(message);
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 lg:px-20 py-12 mt-6">
        <h2 className="text-center text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch to discuss how we can help transform your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {["name", "email", "phone", "company", "country", "jobTitle"].map(
              (field, index) => (
                <div key={index} className="relative">
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="peer block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor={field}
                    className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")} *
                  </label>
                </div>
              )
            )}

            {/* Job Details Textbox */}
            <div className="relative">
              <textarea
                id="jobDetails"
                name="jobDetails"
                rows="4"
                value={formData.jobDetails}
                onChange={handleChange}
                className="peer block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="jobDetails"
                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Job Details *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition"
            >
              Send Message
            </button>

            {/* Display success/error messages */}
            {successMessage && (
              <div className="mt-4 text-green-600">{successMessage}</div>
            )}
            {error && <div className="mt-4 text-red-600">{error}</div>}
          </form>

          {/* Right: Map and Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3421290347353!2d83.46173121503458!3d27.69617018279962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996865e9347d07f%3A0x716c6dbd4084d1d7!2sButwal%2C%20Rupandehi%2C%20Nepal!5e0!3m2!1sen!2snp!4v1692201029842!5m2!1sen!2snp"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600 hover:text-orange-500">
                <FiMapPin
                  className="text-blue-600 mr-2 hover:text-orange-500"
                  size={20}
                />
                Butwal-7, Rupandehi, Nepal
              </p>
              <p className="flex items-center text-gray-600 hover:text-orange-500">
                <FiPhone
                  className="text-blue-600 mr-2 hover:text-orange-500"
                  size={20}
                />
                +977 9806853784
              </p>
              <p className="flex items-center text-gray-600 hover:text-orange-500">
                <FiMail
                  className="text-blue-600 mr-2 hover:text-orange-500"
                  size={20}
                />
                info@aisolution.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
