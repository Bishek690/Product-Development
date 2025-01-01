import React, { useState } from "react";

const FeedbackFormPage = () => {
  const [ratings, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      name: e.target.elements.name.value,
      position: e.target.elements.position.value,
      company: e.target.elements.company.value,
      ratings,
      description: e.target.elements.description.value,
    };

    try {
      const response = await fetch("http://localhost:5500/api/review/create-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
        setIsSubmitted(true);
      } else {
        console.error("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 mt-12 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">We Value Your Feedback</h3>
        {isSubmitted ? (
          <div className="text-center text-green-600 font-bold mt-6">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleFeedbackSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name:</label>
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Position:</label>
              <input
                type="text"
                name="position"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Company:</label>
              <input
                type="text"
                name="company"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Rating:</label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-2xl ${
                      index < ratings ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Feedback:</label>
              <textarea
                name="description"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackFormPage;
