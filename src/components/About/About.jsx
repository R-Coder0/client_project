import React from "react";
import profileImage from "../../assets/About image.jpg";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #0056b3, #0099ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 'bold'
            }}>About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          At Varsha Packers and Movers, we pride ourselves on delivering exceptional moving and relocation services tailored to your needs. With years of experience, we ensure a smooth and stress-free moving experience, providing reliable solutions that prioritize safety, efficiency, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Driven by a passion for customer satisfaction, we offer tailored solutions to meet your unique moving needs. From packing delicate items to transporting heavy furniture, we handle every aspect of your move with diligence and efficiency. Our commitment to quality, reliability, and affordability has earned us the trust of countless satisfied customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
