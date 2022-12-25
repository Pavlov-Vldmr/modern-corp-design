import React from "react";
import styles from "./Banner.module.css"
import { Link } from "react-router-dom";

function Banner(){
    return(
        <>
        <div className={styles.bannerInnter}>
            <div className="continer">
                <span>Lorem ipsum</span>
                <h1>Creative interior design studio</h1>
                <h2>libero leo, interdum sed vehicula id</h2>
                <Link to="/portfolio" className="test">Check out our work</Link>
                   
            </div>
        </div>
        
        </>
    );
}

export default Banner;