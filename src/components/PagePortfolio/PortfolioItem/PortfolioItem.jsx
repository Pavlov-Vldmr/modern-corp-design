import React from "react";
import styles from "./PortfolioItem.module.css"

function PortfolioItem(){
    return(
        <div className={styles.portfolioItem}>
            <img src="./images/portfolio/portfolio.jpg" alt="portfolio item image" />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default PortfolioItem;