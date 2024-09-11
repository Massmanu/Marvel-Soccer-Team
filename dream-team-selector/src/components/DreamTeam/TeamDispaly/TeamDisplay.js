import React from 'react';
import './td.css'

function TeamDisplay({ team }) {
    return (
        <div>
            <h2>Your Selected Team</h2>
            <ul>
                <li>
                    <strong>Goalkeeper (GK):</strong>
                    {team.GK ? (
                        <div>
                            <img src={`${team.GK.thumbnail.path}.${team.GK.thumbnail.extension}`} alt={team.GK.name} width="100" />
                            <h4>{team.GK.name}</h4>
                        </div>
                    ) : (
                        'Not Selected'
                    )}
                </li>

                <li>
                    <strong>Striker (ST):</strong>
                    {team.ST ? (
                        <div>
                            <img src={`${team.ST.thumbnail.path}.${team.ST.thumbnail.extension}`} alt={team.ST.name} width="100" />
                            <h4>{team.ST.name}</h4>
                        </div>
                    ) : (
                        'Not Selected'
                    )}
                </li>

                <li>
                    <strong>Midfielder (MD):</strong>
                    {team.MD ? (
                        <div>
                            <img src={`${team.MD.thumbnail.path}.${team.MD.thumbnail.extension}`} alt={team.MD.name} width="100" />
                            <h4>{team.MD.name}</h4>
                        </div>
                    ) : (
                        'Not Selected'
                    )}
                </li>

                <li>
                    <strong>Defender (DF):</strong>
                    {team.DF ? (
                        <div>
                            <img src={`${team.DF.thumbnail.path}.${team.DF.thumbnail.extension}`} alt={team.DF.name} width="100" />
                            <h4>{team.DF.name}</h4>
                        </div>
                    ) : (
                        'Not Selected'
                    )}
                </li>

                <li>
                    <strong>Extra:</strong>
                    {team.Extra ? (
                        <div>
                            <img src={`${team.Extra.thumbnail.path}.${team.Extra.thumbnail.extension}`} alt={team.Extra.name} width="100" />
                            <h4>{team.Extra.name}</h4>
                        </div>
                    ) : (
                        'Not Selected'
                    )}
                </li>
            </ul>
        </div>
    );
}

export default TeamDisplay;
