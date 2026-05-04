import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white relative overflow-hidden">
      
      {/* Animated SVG Background */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating Circles */}
        <circle cx="100" cy="100" r="50" fill="#6366f1">
          <animate
            attributeName="cy"
            values="100;140;100"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="700" cy="200" r="40" fill="#ec4899">
          <animate
            attributeName="cy"
            values="200;160;200"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="400" cy="500" r="60" fill="#22c55e">
          <animate
            attributeName="cx"
            values="400;450;400"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Rotating Triangle */}
        <polygon points="400,150 450,250 350,250" fill="#f59e0b">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 400 200"
            to="360 400 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-500 animate-pulse">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Lost in Space 🚀
        </h2>

        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          The page you're looking for drifted into another dimension.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 hover:scale-110 transition duration-300 shadow-lg"
        >
          ⬅ Back to Earth
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;