import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";
import data from '../../data/data.json';

export default function Home() {
  const navigate = useNavigate();

  // map => return new []
  // filter
  // find

  const productRatingFilterResult = data.filter((item) => {
    if (item.rating >= 4) {
      return item;
    }
  })

  const productLikeFilterResult = data.filter((item) => {
    if (item.like >= 25) {
      return item;
    }
  })

  const handleGoToMovieDetailsPage = (id) => {
    navigate(`/detail-movie?id=${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Content */}
      <main className="flex-1 bg-gray-100 p-4">
        {/* <h2 className="text-2xl font-semibold mb-4">Movie List</h2> */}
        <h1 className="text-2xl font-bold">Rating</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productRatingFilterResult.map((item, index) => (
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

        <h1 className="text-2xl font-bold">Like</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productLikeFilterResult.map((item, index) => (
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
