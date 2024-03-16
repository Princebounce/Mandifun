import React from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icons for light and dark modes

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 
                 transition duration-300 ease-in-out focus:outline-none"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FiMoon className="text-gray-600 dark:text-gray-400" />
      ) : (
        <FiSun className="text-yellow-500" />
      )}
    </button>
  );
};

export default DarkMode;
