import React from 'react';
import TeamDisplay from '../TeamDispaly/TeamDisplay';

function ConfirmedTeam({ team }) {
    // Function to generate a shareable message with player names and positions
    const createShareMessage = () => {
        if (!team) return 'Check out my Marvel soccer team!';

        const positions = ['GK', 'ST', 'MD', 'DF', 'Extra'];
        const positionNames = {
            GK: 'Goalkeeper',
            ST: 'Striker',
            MD: 'Midfielder',
            DF: 'Defender',
            Extra: 'Extra Player',
        };

        const teamDetails = positions
            .filter(position => team[position])
            .map(position => `${positionNames[position]}: ${team[position]?.name}`)
            .join('\n');

        return `Check out my Marvel soccer team:\n${teamDetails}`;
    };

    const shareUrl = window.location.href; // The current page URL to share

    // WhatsApp Share
    const shareOnWhatsApp = () => {
        const message = createShareMessage();
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Facebook Share
    const shareOnFacebook = () => {
        const message = createShareMessage();
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(message)}`;
        window.open(facebookUrl, '_blank');
    };

    return (
        <div>
            <h2>Confirmed Team</h2>

            {team ? (
                <>
                    {/* Display the team */}
                    <div>
                        <TeamDisplay team={team} />
                    </div>

                    {/* WhatsApp Share Button */}
                    <button
                        onClick={shareOnWhatsApp}
                        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Share on WhatsApp
                    </button>

                    {/* Facebook Share Button */}
                    <button
                        onClick={shareOnFacebook}
                        style={{ marginTop: '20px', marginLeft: '10px', padding: '10px 20px', backgroundColor: '#4267B2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Share on Facebook
                    </button>

                </>
            ) : (
                <p>No team has been confirmed yet.</p>
            )}
        </div>
    );
}

export default ConfirmedTeam;
