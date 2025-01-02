import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPost from "./BlogPost";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get("http://localhost:5500/api/blog/get-blogs", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setBlogs(response.data.data);
    } catch (err) {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5500/api/blog/delete-blog/${blogId}`);
        alert("Blog deleted successfully");
        fetchBlogs();
      } catch (err) {
        alert("Failed to delete blog");
      }
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
  };

  const closeEditModal = () => {
    setEditBlog(null);
    fetchBlogs();
  };

  return (
    <section className="bg-white py-8 px-4 lg:px-16">
      <div className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Blog List</h2>

        {loading && <p>Loading blogs...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">
                  <img
                    src={blog.image || "default-image-url"}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">By AI Solution • {new Date(blog.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 mb-4">{blog.details.substring(0, 100)}...</p>
                  <div className="flex justify-between">
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No blogs found.</p>
          )}
        </div>
      </div>

      {editBlog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <BlogPost
            mode="update"
            initialData={editBlog}
            onSubmit={closeEditModal}
          />
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeEditModal}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogListPage;
