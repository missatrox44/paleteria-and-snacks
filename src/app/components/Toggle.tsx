"use client";

import { useState, useEffect } from "react";
import useStore from "../store";

const Toggle = () => {
  // Access the language and setLanguage from Zustand store
  const { language, setLanguage } = useStore();

  const [isEnglish, setIsEnglish] = useState(language === "en");

  useEffect(() => {
    // Sync local state with global state from the store
    setIsEnglish(language === "en");
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "es" : "en";
    setLanguage(newLanguage);  // Update global state
  };

  return (
    <div className="flex flex-col items-center gap-y-1">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLanguage}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${isEnglish
              ? "bg-gradient-to-r from-[#FF7F3F] via-[#FF9A3C] to-[#FFB547]"
              : "bg-gradient-to-r from-[#844AEA] via-[#5C6ADA] to-[#388DD5]"
            }`}
        >
          {/* white circle */}
          <span
            className={`absolute left-0 top-0 h-6 w-6 transform bg-[#E6E6E6] rounded-full shadow-md transition-transform duration-300 ease-in-out ${isEnglish ? "translate-x-6" : "translate-x-0"
              }`}
          ></span>
        </button>
      </div>

      <p className="text-sm font-bold">
        <span className={isEnglish ? "text-[#FF7F3F]" : ""}>EN</span>/
        <span className={!isEnglish ? "text-[#844AEA]" : ""}>ES</span>
      </p>

    </div>
  );
};

export default Toggle;
