import React from "react";
import LightButton from "../../assets/light-mode.svg";
import DarkButton from "../../assets/dark-mode.svg";
import useDarkMode from "./useDarkMode";

const DarkMode = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="lightmode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
        absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="darkmode"
        onClick={toggleTheme}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};

export default DarkMode;
