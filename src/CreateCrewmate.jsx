import React, { useState } from "react";
import { supabase } from "./client";
import { useNavigate } from "react-router-dom";

const CreateCrewmate = () => {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const createCrewmate = async (e) => {
    e.preventDefault();

    if (!name || !power || !type) {
      alert("Please fill out all fields!");
      return;
    }

    const { error } = await supabase
      .from("crewmates")
      .insert([{ name, power, type }]);

    if (error) {
      console.error("Error creating crewmate:", error);
      alert("Something went wrong!");
    } else {
      alert("Crewmate created successfully!");
      navigate("/gallery"); // redirect to gallery after creation
    }
  };

  return (
    <div className="create-page">
      <h2>Create Your Minecraft Crewmate</h2>
      <form className="create-form" onSubmit={createCrewmate}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Power:</label>
        <input
          type="text"
          placeholder="Enter power..."
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Miner">Miner</option>
          <option value="Builder">Builder</option>
          <option value="Fighter">Fighter</option>
          <option value="Explorer">Explorer</option>
        </select>

        <button type="submit">Add Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
