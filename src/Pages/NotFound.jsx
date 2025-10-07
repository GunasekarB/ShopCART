import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-6 text-center"
      style={{ height: "80vh" }}
    >
      <FaExclamationTriangle className="text-yellow-500 text-7xl mb-6 animate-bounce" />
      <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        className="btn btn-primary me-4 transition duration-300"
        as={Link}
        to="/"
        style={{ margin: "10px" }}
      >
        Go Back Home
      </Link>

      {/* <Link
        className="bg-blue-600  px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        as={Link}
        to="/"
      >
        Go Back Home
      </Link> */}
    </div>
  );
};

export default NotFound;
