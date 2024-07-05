import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/slider/slide1.jpg";
import image2 from "../../assets/slider/slide2.jpg";
import image3 from "../../assets/slider/slide3.jpg";
import '../Hero/Heros.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+917497851082';
    const text = `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phoneNumber}, Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <div className="hero-container">
      <Slider {...settings} className="hero-slider">
        <div className='slider'>
          <img src={image1} alt="Slide 1" className="hero-image" />
        </div>
        <div className='slider'>
          <img src={image2} alt="Slide 2" className="hero-image" />
          {/* <div className="text-overlay">
            <h2 className="text-white text-4x1 sm:text 2x0 font-bold mb-4" style={{fontWeight:"500", color:'#EC4899', textAlign:'left'}}>Expert Beauty Services</h2>
            <p className="text-white text-lg" style={{textAlign:'left'}}>"Elevate Your Style with Professional Care" <br /> From hair styling to makeup artistry, experience top-tier service <br />and stunning results. </p>
          </div> */}
        </div>
      </Slider>
      <div className="form-container">
        <h2 style={{textAlign:'center'}}>Schedule Your Move Today!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Your Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="address"
            name="Address"
            placeholder="Enter Your Address"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
