import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  }
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-pink-500" style={{
                backgroundImage: "linear-gradient(135deg, #0056b3, #0099ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Varsha Packers & Movers
            </h1>
            <p className="text-sm">
            Discover excellence in moving services with Varsha Packers and Movers. We specialize in efficient and reliable relocation solutions to ensure your belongings reach their destination safely and on time. Trust us to make your move hassle-free and seamless.{" "}
            </p>
            <br />
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              <a href="/">
                <FaFacebook className="text-2xl hover:text-blue-500 duration-300" />
              </a>
              <a href="/" target="_blank">
                <FaInstagram className="text-2xl hover:text-pink-500 duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500" style={{
                    backgroundImage: "linear-gradient(135deg, #0056b3, #0099ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-500 space-x-1 text-gray-400"
                    >
                      <a href={link.link}>
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500" style={{
                    backgroundImage: "linear-gradient(135deg, #0056b3, #0099ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  Address
                </h1>
                <p className="text-sm text-gray-400">
                  Plot: 123, <br />
                  Near Naveen Hospital<br />
                  G block, Alpha-2<br />
                  Greater Noida - 201310
                </p>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4" style={{width:'20rem'}}>
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-pink-500" style={{
                    backgroundImage: "linear-gradient(135deg, #0056b3, #0099ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  Contact
                </h1>
                <p className="text-sm text-gray-400">
                  Phone: <a href="tel:+917497851082" className="text-grey-400 hover:text-blue-500 hover:underline">+917497851082</a>
                  <br />
                  Email: <a href="info@varshapackerandmovers.in" className="text-grey-400 hover:text-blue-500 hover:underline">info@varshapackerandmovers.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Varsha Packers & Movers | All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
