import React from "react";
import aboutImage from "../../assets/about.png";

const AboutUs = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 mt-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutImage}
            alt="About Us Illustration"
            className="w-4/5 sm:w-3/4 lg:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center">
          <div className="w-24 h-[3px] bg-red-500 mr-4 mt-8"></div>
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-600">AI Solutions</span>
          </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At AI Solutions, we are passionate about leveraging the power of
            artificial intelligence to solve complex challenges and drive
            innovation. Our team of experts is dedicated to creating intelligent
            systems that transform businesses and improve lives.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            With years of experience in AI development, we specialize in
            delivering tailored solutions that meet the unique needs of our
            clients. Join us on our mission to make the future smarter, one
            solution at a time.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            In addition to AI-driven solutions, we offer a comprehensive suite
            of services, including:
          </p>
          <ul className="list-disc pl-5 sm:pl-8 md:pl-10 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Data Analytics</li>
            <li>Search Engine Optimization (SEO)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
