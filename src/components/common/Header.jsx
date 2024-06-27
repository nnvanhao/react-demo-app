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

  const handleGoToRegisterPage = () => {
    navigate("/register");
  };

  const handleGoToLoginPage = () => {
    navigate("/login");
  };

  const handleGoToMovieType = (movieType) => {
    navigate(`/movie-type?type=${movieType}`);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1
        className="text-xl cursor-pointer"
        onClick={() => handleGoToHomePage()}
      >
        Movie Home Page
      </h1>
      <div className="flex gap-2 items-center">
        <span onClick={() => handleGoToMovieType("action")}>Action</span>
        <span onClick={() => handleGoToMovieType("romantic")}>Romantic</span>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={handleGoToLoginPage}>Login</button>
        <button onClick={handleGoToRegisterPage}>Register</button>
      </div>
      {/* <div className="relative">
        <span onClick={toggleDropdown} className="cursor-pointer">
          Admin
        </span>
        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        )}
      </div> */}
    </header>
  );
}
