import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const movieData = [
    {
      id: 1,
      name: "Movie Title 1",
      description: "Description of movie 1",
    },
    {
      id: 2,
      name: "Movie Title 2",
      description: "Description of movie 2",
    },
  ];

  const handleGoToMovieDetailsPage = (id) => {
    navigate(`/detail-movie?id=${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Content */}
      <main className="flex-1 bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4">Movie List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movieData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow cursor-pointer"
              onClick={() => handleGoToMovieDetailsPage(item.id)}
            >
              <h3 className="text-lg font-bold">Movie Title {index + 1}</h3>
              <p className="text-gray-700">Description of movie {index + 1}.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
