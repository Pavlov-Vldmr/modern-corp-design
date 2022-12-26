import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import styles from "./PageHome.module.css"

function PageHome() {
    return (
        <>
            <Banner />
            <div className={styles.homeInner}>
                <div className={styles.phase}>
                <HeadingParagraph title="Phasellus sit amet justo egestas"
                            text="Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim est, at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam hendrerit a vel dui. Aliquam a sagittis neque, nec congue eros." />
                  
                    <div className={styles.inner.concat(" contaoner")}>
                             <ul className={styles.list}>
                            <li>
                                <Link className={styles.link} to="/">
                                    <img src="./images/icons-home/chart.png" alt="" />
                                    <span> Ullamcorper</span>
                                </Link>

                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    <img src="./images/icons-home/map.png" alt="" />
                                    <span> Elementim</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    <img src="./images/icons-home/location.png" alt="" />
                                    <span> Vitae nunc</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    <img src="./images/icons-home/list.png" alt="" />
                                    <span> Sollicitudin</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    <img src="./images/icons-home/user.png" alt="" />
                                    <span> Vestibulum non</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.Feedback}>
                <HeadingParagraph title="Phasellus sit amet justo egestas"
                            text="Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim est, at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam hendrerit a vel dui. Aliquam a sagittis neque, nec congue eros." />
             
                </div>
            </div>
        </>
    );
}

export default PageHome;