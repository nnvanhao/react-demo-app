import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import { useSearchParams } from "react-router-dom";

export default function MovieType() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  // Extract the 'id' from the query string
  const typeFromUrl = searchParams.get("type");

  const moviesTypesResult = data.filter((item) => {
    if (item.type === typeFromUrl) {
      return item;
    }
  });

  console.log('moviesTypesResult', moviesTypesResult);

  const handleGoToMovieDetailsPage = (id) => {
    navigate(`/detail-movie?id=${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">{typeFromUrl}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moviesTypesResult.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow cursor-pointer"
              onClick={() => handleGoToMovieDetailsPage(item.id)}
            >
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-700">Description of movie {item.id}.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
