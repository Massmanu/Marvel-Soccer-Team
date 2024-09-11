import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

function SocialShare({ team }) {
    const shareUrl = "http://localhost:3000";
    const message = `Check out my Marvel soccer team: GK: ${team.GK?.name}, ST: ${team.ST?.name}, MD: ${team.MD?.name}, DF: ${team.DF?.name}, Extra: ${team.Extra?.name}`;

    return (
        <div>
            <h2>Share Your Team</h2>
            <FacebookShareButton url={shareUrl} quote={message}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={message}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    );
}

export default SocialShare;
