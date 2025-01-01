import React, { useState } from "react";
import { Link } from "react-router-dom";

const pastSolutions = [
  {
    id: 1,
    industry: "E-Commerce",
    challenge:
      "Improving website performance during high-traffic sales events.",
    solution:
      "Implemented scalable cloud infrastructure and optimized the website for faster load times. Introduced AI-powered recommendations to enhance user experience and drive sales.",
    results:
      "- Reduced page load time by 50%.\n- Achieved a 30% increase in sales during peak events.\n- Improved customer satisfaction ratings by 25%.",
    image:
      "https://images.pexels.com/photos/3943742/pexels-photo-3943742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    industry: "Healthcare",
    challenge: "Streamlining patient data management across multiple clinics.",
    solution:
      "Developed a secure cloud-based system for centralized patient record management. Integrated AI algorithms for predictive analysis and better resource allocation.",
    results:
      "- Reduced administrative workload by 40%.\n- Enhanced data accuracy and accessibility for healthcare providers.\n- Increased operational efficiency across clinics.",
    image:
      "https://images.pexels.com/photos/3957981/pexels-photo-3957981.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    industry: "Finance",
    challenge: "Detecting fraudulent transactions in real-time.",
    solution:
      "Implemented a machine learning model for real-time fraud detection. Designed a dashboard for monitoring suspicious activities and generating alerts.",
    results:
      "- Detected and prevented 95% of fraudulent transactions.\n- Reduced financial losses by 80%.\n- Improved compliance with regulatory requirements.",
    image:
      "https://images.pexels.com/photos/4968617/pexels-photo-4968617.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

const PastSolutionsPage = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(null);
  const [rating, setRating] = useState(0);

  const handleLearnMoreClick = (solution) => {
    setCurrentSolution(solution);
    setShowLearnMoreModal(true);
  };

  const handleFeedbackClick = (solution) => {
    setCurrentSolution(solution);
    setShowFeedbackForm(true);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted for:", currentSolution);
    console.log("Rating:", rating);
    setShowFeedbackForm(false);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };


  return (
    <div className="bg-gray-100 py-8 mt-6 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Past Solutions
        </h2>
        <p className="text-gray-600 text-lg">
          Highlights of impactful solutions we’ve provided across industries.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pastSolutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={solution.image}
              alt={solution.industry}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {solution.industry}
            </h3>
            <p className="text-gray-600 mb-4">{solution.challenge}</p>
            <div className="flex justify-between mt-4">
              <button
                className="text-blue-500 font-medium hover:underline"
                onClick={() => handleLearnMoreClick(solution)}
              >
                Learn More →
              </button>
              <Link to="/feedback">
              <button
                className="text-green-500 font-medium hover:underline"
              >
                Feedback
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Modal */}
      {/* Learn More Modal */}
      {showLearnMoreModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-2xl font-bold"
              onClick={() => setShowLearnMoreModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">
              {currentSolution?.industry}
            </h3>
            <p className="mb-2 text-gray-800">
              <strong>Solution:</strong> {currentSolution?.solution}
            </p>
            <p className="text-gray-800">
              <strong>Results:</strong>{" "}
              <pre className="whitespace-pre-wrap">
                {currentSolution?.results}
              </pre>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastSolutionsPage;
