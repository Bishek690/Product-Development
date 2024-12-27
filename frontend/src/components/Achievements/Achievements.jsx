import React, { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-100 py-8 mt-12">
      {/* Section Header */}
      <div className="relative text-center mb-10">
        {/* Left Line */}
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000 ease-in-out ${
            isInView ? "w-1/4 md:w-1/3" : "w-0"
          }`}
        ></div>

        {/* Heading */}
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold hover:text-blue-500 px-4 bg-gray-100 z-10">
          Our Achievements
        </h2>

        {/* Right Line */}
        <div
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-1000 ease-in-out ${
            isInView ? "w-1/4 md:w-1/3" : "w-0"
          }`}
        ></div>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-48">
        {/* Individual Achievement */}
        <div className="text-center">
          <h3 className="text-5xl md:text-6xl sm:text-4xl font-bold text-blue-600 hover:text-orange-500">
            500+
          </h3>
          <p className="text-gray-700 text-sm md:text-lg hover:text-blue-600">
            Projects Completed
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl md:text-6xl sm:text-4xl font-bold text-blue-600 hover:text-orange-500">
            98%
          </h3>
          <p className="text-gray-700 text-sm md:text-lg hover:text-blue-600">
            Client Satisfaction
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl md:text-6xl sm:text-4xl font-bold text-blue-600 hover:text-orange-500">
            30+
          </h3>
          <p className="text-gray-700 text-sm md:text-lg hover:text-blue-600">
            Countries Served
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
