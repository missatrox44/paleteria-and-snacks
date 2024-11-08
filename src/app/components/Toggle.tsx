"use client";

import { useState } from "react";

const Toggle = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setIsEnglish(!isEnglish)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
          isEnglish
            ? "bg-gradient-to-r from-[#844AEA] via-[#5C6ADA] to-[#388DD5]"
            : "bg-gradient-to-r from-[#FF7F3F] via-[#FF9A3C] to-[#FFB547]"
        }`}
      >
        <span
          className={`absolute left-0 top-0 h-6 w-6 transform bg-[#E6E6E6] rounded-full shadow-md transition-transform duration-300 ease-in-out ${
            isEnglish ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
