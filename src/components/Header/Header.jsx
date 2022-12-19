import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { NavLinksData } from "../../data/NavLinksData";

function Header(){
    return(
        <>
        <header>
            <div className="container">
                <nav className={styles.headerNav}>
                    
                        {NavLinksData.map((link) =>
                        (
                            link.id !==3 ? 
                            <li key={link.id}><NavLink to={link.url}>{link.title}</NavLink></li> : 
                            <>
                            <li key={link.id==3}><NavLink to={link.url}>{link.title}</NavLink></li>
                            
                            <Link to="/" alt="WDS">WDS</Link> 
                            </>
                            
                        )
                        )}
                    
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;