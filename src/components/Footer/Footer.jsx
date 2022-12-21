import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerInner}>
                    <div>
                        <Link><img src="./images/icons/socials/Facebook.png" alt="Facebook" /></Link>
                        <Link><img src="./images/icons/socials/Google+.png" alt="Google plus" /></Link>
                        <Link><img src="./images/icons/socials/Pinterest.png" alt="Pinterest" /></Link>
                        <Link><img src="./images/icons/socials/RSS.png" alt="RSS" /></Link>
                        <Link><img src="./images/icons/socials/Twitter.png" alt="Twitter" /></Link>
                    </div>
                    <p>
                        © 2014 WebDesign Studio. All rights reserved. Designed and deve
                    </p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;