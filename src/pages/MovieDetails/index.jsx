import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useSearchParams } from "react-router-dom";
import data from "../../data/data.json";

export default function MovieDetails() {
  const [searchParams] = useSearchParams();

  // Extract the 'id' from the query string
  const idFromUrl = searchParams.get("id");

  const movieResult = data.find((item) => item.id === Number(idFromUrl));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4">Movie Details</h2>
        <div>
          <p>{movieResult.name}</p>
          <p>Description of movie {movieResult.price}.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
