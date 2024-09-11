import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../dreamTeam.css';

import CharacterList from '../CharacterList/CharacterList';
import TeamSelector from '../TeamSelection/TeamSelector';
import TeamDisplay from '../TeamDispaly/TeamDisplay'
import ConfirmedTeam from '../ConfirmedTeam/ConfirmedTeam';
import Loader from 'react-loaders';

function DreamTeamSelection() {
    const [characters, setCharacters] = useState([]);
    const [team, setTeam] = useState({
        GK: null,
        ST: null,
        MD: null,
        DF: null,
        Extra: null,
    });
    const [confirmedTeam, setConfirmedTeam] = useState(null); // Add state for confirmed team

    useEffect(() => {
        // Fetch characters from the backend API
        axios.get('http://localhost:5000/api/characters')
            .then(response => {
                setCharacters(response.data);
            })
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    const handlePositionSelection = (position, character) => {
        setTeam(prevTeam => ({ ...prevTeam, [position]: character }));
    };

    const confirmTeamSelection = () => {
        setConfirmedTeam(team); // Set the confirmed team
    };

    return (
        <div className="App">
            <h1>Marvel 5-a-Side Soccer Team</h1>



            <CharacterList characters={characters} />


            {/* Render TeamDisplay */}
            <TeamDisplay team={team} />

            {/* Pass handlePositionSelection and confirmTeamSelection to TeamSelector */}
            <TeamSelector
                team={team}
                characters={characters}
                onSelectCharacter={handlePositionSelection}
                onConfirmTeam={confirmTeamSelection} // Add confirm button handler
            />

            {/* Only show confirmed team section after confirmation */}
            {/* {confirmedTeam && (
                <div>
                    <h2>Confirmed Team</h2>
                    <TeamDisplay team={confirmedTeam} />
                </div>
            )} */}

            {/* Render ConfirmedTeam component */}
            <ConfirmedTeam team={team} confirmedTeam={confirmedTeam} />


            <Loader type="pacman" />

        </div>
    );
}

export default DreamTeamSelection;
