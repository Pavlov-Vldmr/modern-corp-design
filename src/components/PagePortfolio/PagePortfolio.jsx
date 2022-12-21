import React from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import styles from "./PagePortfolio.module.css"

function PagePortfolio() {
    return (
        <>
            <div className="container">
                <div className={styles.pagePortfolioText}>
                <h2>Our portfolio</h2>
                <hr />
                <p>Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim est, at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam hendrerit a vel dui. Aliquam a sagittis neque, nec congue eros.</p>
                </div>
                
            </div>
            <div className="container">
                <div className={styles.pagePortfolioBlock}>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>

            </div>

        </>
    );
}

export default PagePortfolio;