import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "./client";
import minecraftBlock from "./assets/pngegg.png"; 


const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error("Error:", error);
      else setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <h2>{crewmate.name}</h2>
      <img
        src={minecraftBlock}
        alt={crewmate.name}
        className="detail-image"
      />
      <div className="detail-info">
        <p><strong>Power:</strong> {crewmate.power}</p>
        <p><strong>Type:</strong> {crewmate.type}</p>
        <p><strong>Date Created:</strong> {new Date(crewmate.created_at).toLocaleString()}</p>
      </div>

      <div className="detail-buttons">
        <Link to="/gallery">
          <button className="back-btn">Back to Gallery</button>
        </Link>
        <Link to={`/edit/${crewmate.id}`}>
          <button className="edit-btn">Edit Crewmate</button>
        </Link>
      </div>
    </div>
  );
};

export default CrewmateDetail;
