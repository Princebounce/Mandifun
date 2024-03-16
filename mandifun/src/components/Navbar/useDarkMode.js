import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
