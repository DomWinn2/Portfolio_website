// import { Moon, Sun } from "lucide-react";
// import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";

// export const ThemeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         if (storedTheme === "dark") {
//             setIsDarkMode(true);
//             document.documentElement.classList.add("dark");
//         } else {
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         }
//     }, [])


//     const toggleTheme = () => {
//         if (isDarkMode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             setIsDarkMode(true);
//         }
//     }
//     return (
//         <button onClick={toggleTheme} className={cn(
//             "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//             "focus:outline-hidden"
//         )}>
//             {" "}
//             {isDarkMode ? (
//                 <Sun className="h-6 w-6 text-yellow-300" />
//             ) : (
//                 <Moon className="h-6 w-6 text-blue-900" />
//             )}
//         </button>
//     );
// };

import { useState, useEffect } from "react";
import { MoonStar, SunMedium } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="fixed max-sm:hidden top-5 right-5 z-50"
    >
      <div
        className={`w-12 h-6 rounded-full px-1 flex items-center transition-colors duration-500 shadow-inner ${
          isDarkMode
            ? "bg-red-800/40 border border-white"
            : "bg-blue-700/30 border border-black"
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full transform transition-transform duration-300 flex items-center justify-center shadow-lg ${
            isDarkMode
              ? "translate-x-4.5 bg-red-500 shadow-[0_0_10px_2px_rgba(255,0,0,0.8)]"
              : "translate-x-0 bg-blue-500 shadow-[0_0_10px_2px_rgba(0,153,255,0.8)]"
          }`}
        >
          {isDarkMode ? (
            <MoonStar className="h-3 w-3 text-white" />
          ) : (
            <SunMedium className="h-3 w-3 text-white" />
          )}
        </div>
      </div>
    </button>
  );
};

