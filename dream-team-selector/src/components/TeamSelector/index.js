import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamSelector from './components/TeamSelector';
import './index.scss';

function MainTS() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/characters');
                setCharacters(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="App">
            <h1>Marvel Soccer Dream Team Selector</h1>
            {loading ? (
                <p>Loading characters...</p>
            ) : (
                <TeamSelector characters={characters} />
            )}
        </div>
    );
}

export default MainTS;
