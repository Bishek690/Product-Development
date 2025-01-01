import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/navigation";

const TestimonialPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/review/get-reviews");
        if (response.ok) {
          const data = await response.json();
          setReviews(data.data);
        } else {
          throw new Error("Failed to fetch testimonials");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-100 pt-10 pb-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 text-lg">Here’s what our clients have to say about our work.</p>
      </div>

      {/* Loader or Error Message */}
      {loading && <div className="text-center text-gray-700">Loading testimonials...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Testimonials Slider */}
      {!loading && reviews.length > 0 && (
        <div className="relative">
          {/* Left and Right Arrows */}
          <button
            className="swiper-button-prev text-black w-10 h-10 flex items-center justify-center rounded-full absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
            aria-label="Previous"
          >
            {/* &#8592; */}
          </button>
          <button
            className="swiper-button-next text-black w-10 h-10 flex items-center justify-center rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
            aria-label="Next"
          >
            {/* &#8594; */}
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="bg-white lg:w-1/2 mx-auto p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Review Content */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xl font-semibold text-gray-800">{review.name}</p>
                      <p className="text-gray-600">{review.position} <span className="mx-2"></span> {review.company}</p>
                    </div>
                    {/* Ratings */}
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-xl ${index < review.ratings ? "text-yellow-500" : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{review.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Message if No Reviews */}
      {!loading && reviews.length === 0 && (
        <div className="text-center text-gray-700">No testimonials available yet.</div>
      )}
    </div>
  );
};

export default TestimonialPage;
