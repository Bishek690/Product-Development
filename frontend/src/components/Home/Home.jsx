import React from "react";
import aiImage from "../../assets/aisol.png";
import PastSolutions from "../PastSolutions/PastSolutions";
import Achievements from "../Achievements/Achievements";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-12 gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">AI Solution</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Transform your business with cutting-edge AI solutions. We provide
            innovative and intelligent strategies to help you achieve success in
            the digital age. Explore how we can help you make smarter decisions,
            streamline processes, and deliver exceptional customer experiences.
          </p>
          <button
            className="px-5 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
            aria-label="Explore More"
          >
            Explore More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aiImage}
            alt="AI Illustration"
            className="w-4/5 sm:w-3/4 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>

      <PastSolutions />
      <Achievements />
      <Testimonial />
    </section>
  );
};

export default Home;
