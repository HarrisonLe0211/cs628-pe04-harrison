import React from "react";
import { useParams } from "react-router-dom";

function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find((c) => c.id === cityId);

  return (
    <div className="city-details">
      <h3>{city.name} Details</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

export default CityDetails;
