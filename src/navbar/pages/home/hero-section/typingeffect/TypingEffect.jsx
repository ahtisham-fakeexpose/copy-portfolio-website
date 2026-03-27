import { useState, useEffect } from "react";

export default function TypeEffect() {
  const words = ["Senior Full Stack Developer.", "Web Designer.", "AI Developer.", "Team Lead."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const typingSpeed = 500 / words[index].length; 
    const erasingSpeed = 300 / words[index].length;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="flex items-center min-w-[300px] md:min-w-[600px]">
      {/* Text Container - Font Size 54px fixed */}
      <span className="text-[#FF014F] font-bold text-[54px] antialiased subpixel-antialiased will-change-contents leading-tight">
        {words[index].substring(0, subIndex)}
      </span>

      {/* White Line (Cursor) - Height adjusted for 54px text */}
      <span 
        className="inline-block w-[4px] bg-white animate-pulse ml-2"
        style={{ 
          height: "4.2em", // 54px ke liye 1em (bilkul text ke barabar) best hai
          verticalAlign: "middle",
          display: "inline-block"
        }}
      ></span>
    </div>
  );
}