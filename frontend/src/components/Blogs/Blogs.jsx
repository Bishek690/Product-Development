import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import axios to fetch data from the backend

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch the blog data from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5500/api/blog/get-blogs"); // Adjust the API endpoint based on your backend setup
        if (response.data.data) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  // Truncate text to show only the first 100 characters
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <section className="bg-gray-100 py-20 mt-6 px-6 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Blogs & Articles
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog._id} // Use _id from MongoDB
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: blog._id * 0.1 }}
            >
              <img
                src={blog.image} // Use the image URL from the blog data
                alt={blog.title}
                className="w-full h-56 p-4 rounded-lg object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  {blog.title}
                </h3>
                <div className="text-sm text-gray-500">
                  By AI Solution • {new Date(blog.date).toLocaleDateString()}
                </div>
                <p className="text-gray-700">
                  {truncateText(blog.details, 100)} {/* Show truncated details */}
                </p>
                <button
                  onClick={() => handleReadMore(blog)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Full Blog */}
      {selectedBlog && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg p-6 overflow-y-auto max-h-[80vh] shadow-lg relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-700 text-2xl font-bold"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedBlog.title}
            </h3>
            <div className="text-sm text-gray-500 mb-4">
              By AI Solution • {new Date(selectedBlog.date).toLocaleDateString()}
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {selectedBlog.details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default BlogsPage;
