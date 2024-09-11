import React from 'react';

function CharacterList({ characters }) {
    return (
        <div>
            <h2>Select a Marvel Character</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                        <h3>{character.name}</h3>
                        <h5></h5>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
