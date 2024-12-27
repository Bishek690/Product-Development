import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    testimonial:
      "This solution significantly improved our website performance, helping us handle high traffic seamlessly. Highly recommend!",
    rating: 4, // Rating out of 5
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, HealthTech",
    testimonial:
      "The cloud-based system we implemented has made patient data management much more efficient. Excellent work!",
    rating: 5, // Rating out of 5
  },
  {
    id: 3,
    name: "Samuel Adams",
    role: "Manager, FinCorp",
    testimonial:
      "The fraud detection system implemented was seamless and incredibly accurate. It has helped us save millions!",
    rating: 4, // Rating out of 5
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Director, Retail Solutions",
    testimonial:
      "Their AI-powered recommendations really enhanced the customer experience, leading to a significant sales boost. Fantastic job!",
    rating: 5, // Rating out of 5
  },
];

const TestimonialPage = () => {
  return (
    <div className="bg-gray-100 pt-10 mt-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials
        </h2>
        <p className="text-gray-600 text-lg">
          Here’s what our clients have to say about our work.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              {/* Name & Role */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xl text-gray-800 font-semibold mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                {/* Rating Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${
                        index < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm">{testimonial.testimonial}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialPage;
