# Marvel 5-a-Side Soccer Team Selector

This project is a web application that allows users to select a Marvel 5-a-Side soccer team using the Marvel API. Users can choose characters from a list, assign them to specific soccer positions, and confirm their team. The app also provides filtering options based on comics and series, and users can share their selected team on social media.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [API Usage](#api-usage)
- [Routes](#routes)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Select Marvel characters to create a 5-a-side soccer team.
  - Position roles: Goalkeeper (GK), Striker (ST), Midfielder (MD), Defender (DF), and an additional outfield player.
- Filter characters by comics and series using dropdown filters.
- Confirm team selection and display the confirmed team on a separate page.
- Share the confirmed team on social media (WhatsApp, Facebook).
- Uses Marvel API for fetching character data.

## Technologies

- **React**: Frontend framework for building the user interface.
- **React Router**: For routing between pages.
- **Axios**: For making API requests to the backend and the Marvel API.
- **Node.js**: Backend server for handling API requests.
- **Express**: Node.js web framework for the backend.
- **Marvel API**: For fetching character, comics, and series data.
- **HTML2Canvas**: For taking screenshots of the selected team.

## Setup and Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- Marvel Developer Account and API key (public key and private key).
  - [Sign up here](https://developer.marvel.com/).

### Clone the Repository

```bash
git clone https://github.com/yourusername/marvel-5-a-side-team-selector.git
cd marvel-5-a-side-team-selector


********************************** Steps *******************************************

Install Dependencies
    For both the frontend and backend:
    npm install


Environment Variables
    In the root directory, create a .env file with the following:
        REACT_APP_MARVEL_PUBLIC_KEY=your_marvel_public_key
        REACT_APP_MARVEL_PRIVATE_KEY=your_marvel_private_key


Run the Backend Server
    cd backend
    npm start
    This will run the backend server on http://localhost:5000.


Run the Frontend
    cd frontend
    npm start
    This will run the React app on http://localhost:3000.

API Usage
The project interacts with the Marvel API to fetch character, comic, and series data. To use the Marvel API, you need to:
    1.Get your public and private API keys from the Marvel Developer portal.
    2.Make requests to the Marvel API through your backend, using the keys for authentication.

Example Marvel API Requests
Get characters:
    GET https://gateway.marvel.com/v1/public/characters?apikey=your_public_key
Get comics:
    GET https://gateway.marvel.com/v1/public/comics?apikey=your_public_key

Routes
    /: Main page where users can select characters and assign them to positions.
    /confirmed: Displays the confirmed soccer team on a separate page.


Usage
    1.Visit the main page.
    2.Select characters for each soccer position (Goalkeeper, Striker, Midfielder, Defender, Extra).
    3.Filter characters by comics or series using the dropdown filters.
    4.Click "Confirm Team" to finalize your selection.
    5.The confirmed team will be displayed on a new page, where you can share it on WhatsApp or Facebook.


Contributing:
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (`git push origin feature-branch`).
