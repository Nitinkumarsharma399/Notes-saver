import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3">
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-300"
          }
        >
          List of Pastes
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
