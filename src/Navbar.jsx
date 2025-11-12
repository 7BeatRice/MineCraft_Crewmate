import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Minecraft Crew</h2>
      <div className="nav-links">
         <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/create">Create Crewmate</Link>
      </div>
    </nav>
  );
}

export default Navbar;
