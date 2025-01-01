import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';

const EventPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    images: [],
    eventDetails: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [id]: Array.from(files), // Convert FileList to an array
      }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    // Check if all required fields are filled, including image upload
    if (!formData.title || !formData.date || !formData.location || formData.images.length === 0 || !formData.eventDetails) {
      setErrorMessage('Please fill in all required fields, including uploading at least one image');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('date', formData.date);
    data.append('location', formData.location);
    formData.images.forEach((file) => {
      data.append('images', file);
    });
    data.append('eventDetails', formData.eventDetails);

    try {
      const response = await fetch('http://localhost:5500/api/admin/create-event', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Event posted successfully!', result);
        alert('Event posted successfully!');
      } else {
        const error = await response.json();
        console.error('Failed to post event:', error.message);
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error posting event:', error);
      alert('Error posting event. Check console for details.');
    }
  };

  return (
    <div className="flex bg-white items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Event Post</h1>
        <form onSubmit={handleSubmit}>
          {/* Error Message */}
          {errorMessage && <div className="mb-4 text-red-500 text-center">{errorMessage}</div>}

          <div className="mb-4">
            <div className="flex items-center border rounded-md bg-gray-100 px-2">
              <input
                id="title"
                type="text"
                placeholder="Event Title"
                className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border rounded-md bg-gray-100 px-2">
              <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="date"
                type="date"
                className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border rounded-md bg-gray-100 px-2">
              <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="location"
                type="text"
                placeholder="Location"
                className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border rounded-md bg-gray-100 px-2">
              <PhotoIcon className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="images"
                type="file"
                multiple
                className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="eventDetails"
              placeholder="Event Details"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={formData.eventDetails}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
          >
            Post Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventPost;
