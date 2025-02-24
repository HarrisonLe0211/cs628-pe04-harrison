// Inspired by AddTask component from PE03
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ cities, setCities }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      id: (cities.length + 1).toString(),
      name,
      country,
      population,
    };
    setCities([...cities, newCity]);
    // Redirect to the Cities List after adding the city
    navigate("/cities");
  };

  return (
    <div className="card">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Country:
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Population:
          <input
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
