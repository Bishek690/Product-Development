import React, { useState } from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "AI Solution: Transforming Businesses with Innovation",
    author: "Admin",
    date: "December 15, 2024",
    categories: ["AI", "Technology"],
    content:
      "Discover how AI is reshaping industries and unlocking new opportunities for businesses globally.",
    fullContent: `
Artificial Intelligence (AI) has become a cornerstone of modern innovation. Businesses are leveraging AI to improve operations, enhance customer experiences, and make data-driven decisions. 

Key Points:
- Machine Learning Models: From predictive analytics to customer segmentation, machine learning is enabling businesses to anticipate trends and align strategies.
- AI in Healthcare: Revolutionary advancements in diagnostics, personalized medicine, and operational efficiency.
- Retail Transformation: AI-driven recommendation systems and inventory optimization for enhanced customer satisfaction.

Challenges and Opportunities:
- Adopting AI requires robust infrastructure and expertise.
- The future of AI lies in ethical implementation and the development of human-centric AI solutions.

AI is not just a tool; it's a strategy for staying competitive in a rapidly evolving marketplace.
    `,
    image:
      "https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    title: "Cloud Computing Solutions for Your Business Needs",
    author: "Admin",
    date: "November 28, 2024",
    categories: ["Cloud", "Business"],
    content:
      "Explore how cloud computing enhances business scalability and security in the digital age.",
    fullContent: `
Cloud computing is transforming how businesses operate, providing unparalleled scalability, flexibility, and cost-efficiency. 

Key Features:
- Hybrid Cloud: Combines the security of private clouds with the scalability of public clouds.
- Serverless Architecture: Reduces infrastructure costs by running applications on demand.
- Edge Computing: Processes data closer to its source, reducing latency and improving performance.

Case Studies:
1. A startup scaling its resources to handle peak traffic during a product launch.
2. Enterprises adopting cloud-based disaster recovery solutions.

Cloud computing is no longer optional—it's a necessity for businesses looking to stay ahead in the digital era.
    `,
    image:
      "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    title: "Cybersecurity Trends: Protecting Data in 2024",
    author: "Jane Doe",
    date: "October 10, 2024",
    categories: ["Security", "Technology"],
    content:
      "Stay updated on the latest trends in cybersecurity to safeguard your digital assets.",
    fullContent: `
Cybersecurity is a critical concern in the age of digital transformation. As cyber threats evolve, businesses must adapt to stay secure.

Key Trends:
- Zero Trust Architecture: A “never trust, always verify” approach to network security.
- AI in Cybersecurity: Using machine learning to detect and respond to threats in real time.
- IoT Security: Protecting the growing number of connected devices.

Best Practices:
1. Regularly update software and systems.
2. Implement multi-factor authentication.
3. Educate employees on recognizing phishing attacks.

Cybersecurity is not just a technical issue; it’s a strategic priority for every organization.
    `,
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    title: "The Future of Remote Work: Trends and Insights",
    author: "John Smith",
    date: "September 22, 2024",
    categories: ["Business", "Work"],
    content:
      "Understand how remote work is shaping the future of workplaces and employee productivity.",
    fullContent: `
Remote work has become a defining feature of modern business culture, accelerated by advancements in technology and changing workforce expectations.

Key Insights:
- **Collaboration Tools**: Platforms like Slack, Zoom, and Microsoft Teams are essential for remote teams.
- **Flexible Schedules**: Employees value flexibility, which boosts morale and productivity.
- **Challenges**: Maintaining work-life balance and combating isolation in remote settings.

The future workplace will likely be a hybrid model, combining the best of remote and in-office work.
    `,
    image:
      "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 5,
    title: "Sustainability in Tech: Building a Greener Future",
    author: "Emma Green",
    date: "August 14, 2024",
    categories: ["Environment", "Technology"],
    content:
      "Discover how the tech industry is embracing sustainability to combat climate change.",
    fullContent: `
The tech industry plays a pivotal role in driving sustainability initiatives. From energy-efficient data centers to innovative recycling programs, technology is key to creating a greener future.

Key Developments:
- Green Data Centers: Companies are investing in renewable energy to power operations.
- E-Waste Recycling: Addressing the growing problem of discarded electronics.
- Carbon-Neutral Goals: Tech giants are committing to reducing their environmental impact.

Sustainability is not just good for the planet—it's good for business.
    `,
    image:
      "https://images.pexels.com/photos/3758102/pexels-photo-3758102.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
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
              key={blog.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: blog.id * 0.1 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 p-4 rounded-lg object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  {blog.title}
                </h3>
                <div className="text-sm text-gray-500">
                  By {blog.author} • {blog.date}
                </div>
                <p className="text-gray-700">{blog.content}</p>
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
              By {selectedBlog.author} • {selectedBlog.date}
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {selectedBlog.fullContent}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default BlogsPage;
