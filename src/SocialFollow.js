import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css'
export default function SocialFollow() {
    return (
        <div className="social-container">
            <h2>Follow Us</h2>
            <a href="https://www.youtube.com/"
               className="youtube social" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a href="https://www.facebook.com/"
               className="facebook social" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://twitter.com/" className="twitter social" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a href="https://www.instagram.com/"
               className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    );
}