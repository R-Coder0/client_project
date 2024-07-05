import React from "react";
import { MenuLinks } from "./Navbar";
import logo from "../../assets/logovarshapnm.png"; // Adjust the path to your logo image

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const handleClick = (event, link) => {
    event.preventDefault();

    let sectionId = "";
    switch (link) {
      case "about":
        sectionId = "about";
        break;
      case "services":
        sectionId = "services";
        break;
      default:
        break;
    }

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    if (showMenu) {
      toggleMenu();
    }
  };

  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (showMenu) {
      toggleMenu();
    }
  };

  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img src={logo} alt="Logo" className="h-12 w-14" />
          <div>
            <h1> Varsha Packers
               <br />& Movers</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a
                  href={`#${data.link}`}
                  className="mb-5 inline-block hover:text-pink-500"
                  onClick={(e) => handleClick(e, data.link)}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="primary-btn bg-pink-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-pink-600 mt-8"
          onClick={handleGetInTouchClick}
          style={{ background: 'linear-gradient(135deg, #0056b3, #0099ff)'}}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
