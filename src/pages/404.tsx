import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="font-semibold text-2xl mb-3">404 Not Found.</h2>
      <Link className="hover:underline text-gray-600" to="/">
        Go back Home ↩
      </Link>
    </div>
  );
};
