import React from "react";
import { Link, Outlet } from "react-router-dom";

function CitiesList({ cities }) {
  return (
    <div className="card">
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

export default CitiesList;
