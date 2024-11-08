"use client";

import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
          isOn
            ? "bg-gradient-to-r from-[#844AEA] via-[#5C6ADA] to-[#388DD5]"
            : "bg-gradient-to-r from-[#FD7F00] via-[#FEA800] to-[#FFC800]"
        }`}
      >
        <span
          className={`absolute left-0 top-0 h-6 w-6 transform bg-[#E6E6E6] rounded-full shadow-md transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
