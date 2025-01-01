import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);

  // Fetch inquiries from the backend
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get("http://localhost:5500/api/contact/get-contacts");
        if (response.data.data) {
          setInquiries(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <section className="bg-white py-6 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Inquiries</h2>

      <div className="container mx-auto">
        {inquiries.length === 0 ? (
          <p className="text-center text-gray-500">No inquiries found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry._id}
                className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    <span>Name:</span> {inquiry.name}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> {inquiry.email}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Phone:</span> {inquiry.phone}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Company:</span> {inquiry.company}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Country:</span> {inquiry.country.name || inquiry.country}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Job Title:</span> {inquiry.jobTitle || "N/A"}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Job Details:</span> {inquiry.jobDetails}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Submitted On:</span>{" "}
                  {new Date(inquiry.submittedDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
