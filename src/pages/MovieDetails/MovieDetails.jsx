import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useSearchParams } from 'react-router-dom';

export default function MovieDetails() {
  const [searchParams] = useSearchParams();

  // Extract the 'id' from the query string
  const id = searchParams.get('id');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4">Movie Details</h2>
        <div>
          <p>Movie Title {id}</p>
          <p>Description of movie {id}.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
