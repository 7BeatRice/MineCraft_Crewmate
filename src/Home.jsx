import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'; // your CSS file

const Home = () => {
  return (
    <div className="container">
      <h1>Minecraft Crew</h1>
      <Link to="/create" className="btn">Create New Crew Member</Link>
    </div>
  );
};

export default Home;
