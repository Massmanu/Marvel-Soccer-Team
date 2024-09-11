import React from 'react';

function TeamSelector({ team, onSelectCharacter, characters, onConfirmTeam }) {
    return (
        <div>
            <h2>Select Your Team Positions</h2>

            <div>
                <label>Goalkeeper (GK)</label>
                <select onChange={(e) => onSelectCharacter('GK', characters.find(char => char.name === e.target.value))}>
                    <option value="">Select a player</option>
                    {characters.map(character => (
                        <option key={character.id} value={character.name}>{character.name}</option>
                    ))}
                </select>
            </div>
            <br></br>
            <div>
                <label>Striker (ST)</label>
                <select onChange={(e) => onSelectCharacter('ST', characters.find(char => char.name === e.target.value))}>
                    <option value="">Select a player</option>
                    {characters.map(character => (
                        <option key={character.id} value={character.name}>{character.name}</option>
                    ))}
                </select>
            </div>
            <br></br>
            <div>
                <label>Midfielder (MD)</label>
                <select onChange={(e) => onSelectCharacter('MD', characters.find(char => char.name === e.target.value))}>
                    <option value="">Select a player</option>
                    {characters.map(character => (
                        <option key={character.id} value={character.name}>{character.name}</option>
                    ))}
                </select>
            </div>
            <br></br>
            <div>
                <label>Defender (DF)</label>
                <select onChange={(e) => onSelectCharacter('DF', characters.find(char => char.name === e.target.value))}>
                    <option value="">Select a player</option>
                    {characters.map(character => (
                        <option key={character.id} value={character.name}>{character.name}</option>
                    ))}
                </select>
            </div>
            <br></br>
            <div>
                <label style={{ marginTop: '20px' }}>Outfield</label>
                <select onChange={(e) => onSelectCharacter('Extra', characters.find(char => char.name === e.target.value))}>
                    <option value="">Select a player</option>
                    {characters.map(character => (
                        <option key={character.id} value={character.name}>{character.name}</option>
                    ))}
                </select>
            </div>

            {/* Add a confirm button to finalize the team */}
            <button onClick={onConfirmTeam} style={{ marginTop: '20px' }}>Confirm Team</button>
        </div>
    );
}

export default TeamSelector;
