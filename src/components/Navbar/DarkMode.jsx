import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; 
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <>
      {theme === "light" ? (
        <BiSolidSun onClick={() => setTheme("dark")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("light")} className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode;
