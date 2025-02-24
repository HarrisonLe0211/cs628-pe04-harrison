// Setting up routes for the rest of the appliation
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import CitiesList from "./CitiesList";
import CityDetails from "./CityDetails";
import AddCity from "./AddCity";

function App() {
  // Holds the cities state (initially an empty array) so that the list of cities can be shared 
  // and updated across different routes
  const [cities, setCities] = useState([]);

  return (
    <Router>
      <div>

        <header className="header">Cities Application</header>
        
        {/* The header and navigation bar (with links to "Cities List" and "Add City") are defined 
        directly in App.js. Inspired by the Team function from HOS06 */}
        <nav className="nav-bar">
          <Link to="/cities">Cities List</Link>
          <Link to="/add">Add City</Link>
        </nav>
        
        <div className="main-container">
          <Routes>
            {/* Uses cityID within nested route for city details. Whatever the current value of the 
            "cities" state is, it will be provided to the "CitiesList"/"CityDetails" component */}
            <Route path="/cities" element={<CitiesList cities={cities} />}>
              <Route path=":cityId" element={<CityDetails cities={cities} />} />
            </Route>
            
            {/* This allows the AddCity component to both display the form for adding a new city and 
            to update the main list of cities when a new city is added*/}
            <Route path="/add" element={<AddCity cities={cities} setCities={setCities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
