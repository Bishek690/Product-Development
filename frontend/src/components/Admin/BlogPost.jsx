import React, { useState, useEffect } from 'react';
import { CalendarIcon, PhotoIcon } from '@heroicons/react/24/outline';

const BlogPost = ({ mode = 'create', initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    image: null,
    details: '',
  });

  useEffect(() => {
    if (mode === 'update' && initialData) {
      setFormData({
        title: initialData.title || '',
        date: initialData.date || '',
        image: initialData.image || null,  // Keep the existing image URL if it's an update
        details: initialData.details || '',
      });
    }
  }, [mode, initialData]);
  
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.title || !formData.date || !formData.details) {
      alert('All fields are required.');
      return;
    }
  
    const isNewImage = formData.image instanceof File;
    const isUpdateMode = mode === 'update';
  
    const data = new FormData();
    data.append('title', formData.title);
    data.append('date', formData.date);
    data.append('details', formData.details);
    
    if (isNewImage) {
      data.append('image', formData.image);
    }
  
    try {
      const endpoint = isUpdateMode
        ? `http://localhost:5500/api/blog/update-blog/${initialData._id}`
        : 'http://localhost:5500/api/blog/create-blog';
  
      const requestConfig = {
        method: isUpdateMode ? 'PUT' : 'POST',
        headers: isUpdateMode && !isNewImage ? { 'Content-Type': 'application/json' } : {},
        body: isUpdateMode && !isNewImage 
          ? JSON.stringify({
              title: formData.title,
              date: formData.date,
              details: formData.details
            })
          : data
      };
  
      const response = await fetch(endpoint, requestConfig);
      if (!response.ok) throw new Error('Failed to process blog');
  
      alert(`Blog ${isUpdateMode ? 'updated' : 'posted'} successfully!`);
      if (onSubmit) onSubmit();
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing blog. Please try again.');
    }
  };
  
  return (
    <div className="flex bg-white items-center justify-center h-screen bg-gray-100 m-0 p-0">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {mode === 'create' ? 'Post a Blog' : 'Update Blog'}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Blog Title"
              className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Details
            </label>
            <textarea
              id="details"
              placeholder="Blog Details"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          >
            {mode === 'create' ? 'Post Blog' : 'Update Blog'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
