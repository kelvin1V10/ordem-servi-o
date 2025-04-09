import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ParMin</h1>
      <nav className="flex gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Login
        </button>
      </nav>
    </header>
  );
}
