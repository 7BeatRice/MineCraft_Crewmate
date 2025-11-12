import React, { useEffect, useState } from "react";
import { supabase } from "./client";
import { Link } from "react-router-dom";
import minecraftBlock from "./assets/pngegg.png"; 


const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.log("Error fetching crewmates:", error);
      else setCrewmates(data);
    };

    fetchCrewmates();
  }, []);

  return (
      <div className="gallery">
    {crewmates.map((c) => (
      <div key={c.id} className="crewmate-card">
        <div className="crewmate-figure">
          <img
            src={minecraftBlock}
            alt="Minecraft Crewmate"
          />
        </div>
        <h3>{c.name}</h3>
        <p><strong>Power:</strong> {c.power}</p>
        <p><strong>Type:</strong> {c.type}</p>
        <Link to={`/edit/${c.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
        <Link to={`/crewmate/${c.id}`}>
          <button className="view-btn">View Details</button>
        </Link>

      </div>
    ))}
  </div>
    );
};

export default CrewmateGallery;
