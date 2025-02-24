# Cities Application

## Input
There are a few input types that the user can make:
1. Entering a City's Name, Country, and Population in the text boxes to add a new City
2. Clicking on an existing City in the list will show its detailed information

## Process
The app is repurposed from the examples provided in HOS06, along with the PE03 as the base for the add function
- When the user opens the app, it starts with an empty list of Cities
- When the user navigates to the "Add City" screen, the AddCity component renders a form. When the user fills out the form and clicks "Add City", the form's data is used to create a new City object. This new City is added to the cities state, which is managed in App.js. Afterwards, the user is redirected back to the Cities List screen
- On the "Cities List" screen, when a user clicks on a City name, the app will render the CityDetails component, showing detailed information for the selected City (Country and Population)

## Output
A webpage that displays a list of Cities in the web browser. User can add new Cities by entering their details, and also, view detailed information about each City by clicking on its name
