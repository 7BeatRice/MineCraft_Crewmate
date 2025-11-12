import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./client";

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState({ name: "", power: "", type: "" });

  // Fetch the current crewmate info
  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.log(error);
      else setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  // Update handler
  const updateCrewmate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("crewmates")
      .update({
        name: crewmate.name,
        power: crewmate.power,
        type: crewmate.type,
      })
      .eq("id", id);
    if (error) console.error(error);
    else {
      alert("Crewmate updated!");
      navigate("/gallery");
    }
  };

  // Delete handler
  const deleteCrewmate = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crewmate?");
    if (confirmDelete) {
      const { error } = await supabase.from("crewmates").delete().eq("id", id);
      if (error) console.error(error);
      else {
        alert("Crewmate deleted!");
        navigate("/gallery");
      }
    }
  };

  return (
    <div className="edit-page">
      <h2>Edit Minecraft Crewmate</h2>
      <form className="edit-form" onSubmit={updateCrewmate}>
        <label>Name:</label>
        <input
          type="text"
          value={crewmate.name}
          onChange={(e) => setCrewmate({ ...crewmate, name: e.target.value })}
        />

        <label>Power:</label>
        <input
          type="text"
          value={crewmate.power}
          onChange={(e) => setCrewmate({ ...crewmate, power: e.target.value })}
        />

        <label>Type:</label>
        <select
          value={crewmate.type}
          onChange={(e) => setCrewmate({ ...crewmate, type: e.target.value })}
        >
          <option value="Miner">Miner</option>
          <option value="Builder">Builder</option>
          <option value="Fighter">Fighter</option>
          <option value="Explorer">Explorer</option>
        </select>

        <div className="edit-buttons">
          <button type="submit" className="save-btn">Save Changes</button>
          <button type="button" className="delete-btn" onClick={deleteCrewmate}>
            Delete Crewmate
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCrewmate;
