import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedbackAndReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get("http://localhost:5500/api/review/get-reviews", {
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
      }); 
      setReviews(response.data.data);
    } catch (err) {
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-8 px-4 lg:px-16">
      <div className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Feedback & Reviews</h2>

        {loading && <p>Loading reviews...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Review Cards Section */}
        <div className="bggrid grid-cols-1 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="p-6 bg-grey-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Review Header: Name and Rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-blue-600">{review.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 mr-4 font-semibold">{review.position}</span>
                      <span className="text-sm text-gray-500 font-semibold">{review.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* Rating: Display Stars */}
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className={`text-yellow-500 ${index < review.ratings ? 'fas fa-star' : 'far fa-star'}`}></span>
                    ))}
                  </div>
                </div>

                {/* Review Description */}
                <p className="text-gray-700 mb-4">{review.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No reviews found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndReviewsPage;
