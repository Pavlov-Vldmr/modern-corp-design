import React from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

import styles from "./Header.module.css";
import { NavLinksData } from "../../data/NavLinksData";

function Header() {
    const match = useMatch("/");
    return (
        <>
            <header className={ match ? styles.themeHome : null}>
                <div className="container">
                    <nav className={styles.headerNav}>
                        <div>
                            {NavLinksData.map((link) =>
                            (
                                link.id < 4 ?
                                    <li key={link.id}><NavLink to={link.url}>{link.title}</NavLink></li> : null
                            ))}
                        </div>
                        <li><Link to="/" alt="WDS">WDS</Link> </li>
                        <div>
                            {NavLinksData.map((link) =>
                            (
                                link.id >= 4 ?
                                    <li key={link.id}><NavLink to={link.url}>{link.title}</NavLink></li> : null
                            ))}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;