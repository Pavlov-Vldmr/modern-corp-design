import React from "react";
import styles from "./ServicesItem.module.css"
import { Link } from "react-router-dom";

function ServicesItem(props) {
    const { icons, title, text, url } = props;
    return (
        <>
            <div className={styles.servicesItem}>
                <img src={icons} alt={icons} />
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link to={url}>Learn more</Link>
                </div>
            </div>
        </>
    );
}

export default ServicesItem;