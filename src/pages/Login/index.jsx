import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async () => {
    // console.log({ firstName, lastName, email, password, confirmPassword });

    // Send a POST request

    // GET -> get data
    // POST -> request create new data, verify data
    // PUT -> update data
    // DELETE -> delete data

    // http://localhost:5510

    // https://movies-nestjs-movies.tagmju.easypanel.host/

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5510/auth/sign-in",
        data: {
          email,
          password,
        },
      });

      if (response.status === 201) {
        toast.success("Successful");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 p-4">
        <div className="flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4 mt-40">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-md font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => handleRegister()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
