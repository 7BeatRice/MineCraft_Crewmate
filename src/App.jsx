// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateCrewmate from './CreateCrewmate'; 
import CrewmateGallery from './CrewmateGallery';
import EditCrewmate from './EditCrewmate';
import CrewmateDetail from './CrewmateDetail';
import Navbar from './Navbar';
import "./App.css"; 
const App = () => {
  return (
    <Router>
      {/*shows on every page*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/gallery" element={<CrewmateGallery/>}/>
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />


      </Routes>
    </Router>
  );
};

export default App;
