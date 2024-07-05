import React from "react";
import image1 from "../../assets/Services/service1.jpg";
import image2 from "../../assets/Services/service2.jpg";
import image3 from "../../assets/Services/service3.jpg";
import image4 from "../../assets/Services/service4.jpg";
import image5 from "../../assets/Services/service5.jpg";
import image6 from "../../assets/Services/service6.jpg";
import image7 from "../../assets/Services/service7.jpg";

const skillsData = [
  {
    name: "Domestic Moving",
    image: image1,
    link: "#",
    description:
      "Relocate hassle-free with our expert domestic moving services. We ensure safe and efficient transport of your belongings to your new home.",
    aosDelay: "0",
  },
  {
    name: "Corporate Relocation",
    image: image2,
    link: "#",
    description:
      "Efficient corporate relocation solutions tailored to meet the needs of businesses. Trust us to handle your office move with precision and care.",
    aosDelay: "300",
  },
  {
    name: "Warehousing & Storage",
    image: image3,
    link: "#",
    description:
      "Secure warehousing and storage services to safeguard your goods. Whether short-term or long-term, we provide reliable storage solutions.",
    aosDelay: "500",
  },
  {
    name: "Transport Service",
    image: image4,
    link: "#",
    description:
      "Swift and reliable transport services for all your logistical needs. Count on us for timely and efficient delivery of goods across various destinations.",
    aosDelay: "500",
  },
  {
    name: "Commercial Movers",
    image: image5,
    link: "#",
    description:
      "Specialized commercial moving services designed to minimize business disruption. We ensure a smooth transition for your office or business relocation.",
    aosDelay: "700",
  },
  {
    name: "Door To Door Service",
    image: image6,
    link: "#",
    description:
      "Convenient door-to-door moving services for a stress-free relocation experience. Let us handle the details while you focus on settling into your new home.",
    aosDelay: "700",
  },
  {
    name: "Household Moving",
    image: image7,
    link: "#",
    description:
      "Personalized household moving services tailored to your specific needs. Our experienced team ensures your belongings arrive safely and on time.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <div id="services" className="anchor"></div>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl"
              style={{
                background: "linear-gradient(135deg, #0056b3, #0099ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 'bold'
              }}
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are Varsha Packers and Movers, dedicated to providing seamless relocation services tailored to your needs.
            </p>
          </div>

          {/* Services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card rounded-lg overflow-hidden shadow-md transition duration-200 ease-in-out transform hover:scale-95 hover:shadow-blue-hover"
              >
                <div>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold mb-2">{skill.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
