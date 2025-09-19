// DiscoverMore.jsx
import React from "react";
import Marq from "../assets/marq.png";

const DiscoverMore = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Horizon subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen h-[40vh] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md 
        bg-black/5 backdrop-blur-xl 
        rounded-2xl shadow-2xl border border-black/10 
        px-6 py-6 flex flex-col items-center top-16"
      >
        {/* Logo with Animation */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-full p-3 shadow-lg">
            <img
              src={Marq}
              alt="My Profile"
              className="w-14 h-14 rounded-full object-cover animate-float"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-gray-900 text-2xl font-semibold text-center">
          Welcome to MarqWom<span className="ml-1">✨</span>
        </h2>
        <p className="text-gray-600 text-sm text-center mt-2 mb-6">
          Credentials are only used to authenticate in ProtoHub. All saved data
          will be stored in your database.
        </p>

        {/* Form */}
        <form className="w-full flex flex-col gap-4 justify-center">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Emily"
              className="flex-1 px-2 py-2 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{
                background: "rgba(250,250,250,0.8)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            />
            <input
              type="text"
              placeholder="Jhonson"
              className="flex-1 px-2 py-2 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{
                background: "rgba(250,250,250,0.8)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <input
            type="email"
            placeholder="emily@gmail.com"
            className="px-4 py-2 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              background: "rgba(250,250,250,0.8)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />

          <input
            type="password"
            placeholder="********"
            className="px-4 py-2 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              background: "rgba(250,250,250,0.8)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          />

          <select
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              background: "rgba(250,250,250,0.8)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>

          <label className="flex items-center text-xs text-gray-600 mt-1">
            <input type="checkbox" className="mr-2 accent-gray-600" />
            I agree to the Terms of service and Privacy policies of ProtoHub
            Corporation
          </label>

          <button
            type="submit"
            className="mt-2 text-white font-semibold py-2 rounded-md shadow-lg transition"
            style={{
              background: "linear-gradient(90deg, #4f46e5, #3b82f6)", // Indigo → Blue gradient
            }}
          >
            SIGN UP
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="Facebook"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
            alt="Apple"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(3deg); }
          }
        `}
      </style>
    </div>
  );
};

export default DiscoverMore;
