import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1
        className="text-xl cursor-pointer"
        onClick={() => handleGoToHomePage()}
      >
        Movie Home Page
      </h1>
      <div className="relative">
        <span onClick={toggleDropdown} className="cursor-pointer">
          Admin
        </span>
        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        )}
      </div>
    </header>
  );
}
