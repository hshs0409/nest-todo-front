import React from "react";
import { faCheckSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";

export const Header: React.FC = () => {
  const { data } = useMe();
  console.log(data);
  return (
    <header className="py-4">
      <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="/">
          <span className="text-xl">
            TODO
            <FontAwesomeIcon icon={faCheckSquare} className="text-xl ml-1" />
          </span>
        </Link>
        <span className="text-xs">
          <Link to="/edit-profile">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Link>
        </span>
      </div>
    </header>
  );
};
