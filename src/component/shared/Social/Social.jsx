import React from "react";
import fbIcon from '../../Images/icons/facebook.png';
import instaIcon from '../../Images/icons/instagram.png';
import linkedinIcon from '../../Images/icons/linkedin.png';
import twiterIcon from '../../Images/icons/twitter.png';
import './style.css';

const Social = ({ className = '' }) => {

    return (
        <div className={`socialIcon ${className}`}>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="socialIcon_link"><img src={fbIcon} className="socialIcon_icon" alt="Facebok" /></a>

            <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="socialIcon_link"><img src={instaIcon} className="socialIcon_icon" alt="Instagram" /></a>

            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank" className="socialIcon_link"><img src={linkedinIcon} className="socialIcon_icon" alt="Linkedin" /></a>

            <a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="socialIcon_link"><img src={twiterIcon} className="socialIcon_icon" alt="Twitter" /></a>
        </div>
    )
}

export default Social
