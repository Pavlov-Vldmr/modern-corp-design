import React from "react";
import styles from "./MemberCard.module.css"
import { Link } from "react-router-dom";

function MemberCard(props) {
    const { photo_url, name, text, twitter, facebook, google, pinterest } = props;
    return (
        <>
            <div className={styles.memberCard}>
                <img intrinsicsize="225 x 225" src={photo_url} alt={name} />
                <h4>{name}</h4>
                <p>{text}</p>
                <div>
                    <Link to={twitter}><img src="./images/icons/socials/Twitter.png" alt="Twitter" /></Link>
                    <Link to={facebook}><img src="./images/icons/socials/Facebook.png" alt="Facebook" /></Link>
                    <Link to={google}><img src="./images/icons/socials/Google+.png" alt="Google plus" /></Link>
                    <Link to={pinterest}><img src="./images/icons/socials/Pinterest.png" alt="Pinterest" /></Link>
                </div>
            </div>
        </>
    );
}

export default MemberCard;