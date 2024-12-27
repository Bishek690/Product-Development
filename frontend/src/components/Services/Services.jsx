import React, { useState, useRef, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom website development tailored to your business needs.",
    details: `
      We specialize in creating responsive and visually appealing websites that drive engagement and enhance your online presence. 
      Our team ensures SEO optimization, fast loading speeds, and scalable architecture.
      Key features:
      - Fully responsive designs
      - SEO-optimized pages
      - Integration with third-party APIs
    `,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Developing user-friendly mobile apps for iOS and Android.",
    details: `
      We build intuitive and performance-driven mobile apps that cater to your business goals. 
      Our apps are designed for both iOS and Android platforms, ensuring seamless user experiences.
      Key features:
      - Cross-platform compatibility
      - User-friendly interfaces
      - High performance and security
    `,
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Transform data into actionable insights for your business.",
    details: `
      Unlock the potential of your data with our analytics services. 
      We provide comprehensive solutions to track KPIs, analyze trends, and make data-driven decisions.
      Key features:
      - Interactive dashboards
      - Predictive analytics
      - Custom reports tailored to your needs
    `,
  },
  {
    id: 4,
    title: "AI Consulting",
    description: "Expert guidance on implementing AI solutions.",
    details: `
      We help businesses integrate AI technologies to optimize operations and enhance decision-making. 
      Our solutions align with your goals and deliver measurable results.
      Key features:
      - AI-powered automation
      - Custom AI model development
      - Integration with existing workflows
    `,
  },
  {
    id: 5,
    title: "Custom Development",
    description: "Tailored AI solutions for unique challenges.",
    details: `
      Our team specializes in developing software solutions that are customized to address specific business challenges.
      Key features:
      - Custom architecture
      - Scalable solutions
      - Advanced integrations
    `,
  },
  {
    id: 6,
    title: "Integration Services",
    description: "Seamless AI integration into existing workflows.",
    details: `
      Ensure a smooth transition to AI-powered processes with our integration services. 
      We focus on minimizing disruptions while maximizing efficiency.
      Key features:
      - Workflow optimization
      - API integration
      - Robust security measures
    `,
  },
  {
    id: 7,
    title: "Cloud Computing",
    description: "Scalable and flexible cloud solutions for your business.",
    details: `
      Leverage the power of cloud computing to scale your operations with ease. 
      We provide secure cloud-based solutions for infrastructure, storage, and computing power.
      Key features:
      - Scalable infrastructure
      - Secure data storage
      - High availability and reliability
    `,
  },
  {
    id: 8,
    title: "Cybersecurity",
    description: "Protect your business from digital threats with our cybersecurity solutions.",
    details: `
      We offer comprehensive cybersecurity services to safeguard your digital assets. 
      Our solutions protect against hacking, data breaches, and other online threats.
      Key features:
      - Threat detection and prevention
      - Network security
      - Risk assessments and compliance
    `,
  },
  {
    id: 9,
    title: "Blockchain Development",
    description: "Building decentralized applications and blockchain solutions.",
    details: `
      We help businesses integrate blockchain technologies to improve transparency, security, and efficiency.
      Key features:
      - Custom blockchain solutions
      - Smart contract development
      - Secure transactions and data integrity
    `,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedService(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-gray-100 py-24 px-16 mt-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg">
          Comprehensive services tailored to your business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-lg font-bold text-gray-700">{service.title.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button
              className="text-blue-500 font-medium hover:underline"
              onClick={() => handleLearnMore(service)}
            >
              Learn more →
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 max-w-lg w-full relative"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 whitespace-pre-line mb-6">
              {selectedService.details}
            </p>
            <a href="/contact" className="inline-block">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Inquiry
              </button>
              </a>
            <button
              className="absolute top-4 right-4 text-red-600 hover:text-red-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
