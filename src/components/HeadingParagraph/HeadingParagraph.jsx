import React from "react";
import styles from "./HeadingParagraph.module.css"

function HeadingParagraph(props) {
    const { title, text } = props
    return (
        <>
            <div className="container">
                <div className={styles.headingParagraph}>
                    <h2>{title}</h2>
                    <hr />
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

export default HeadingParagraph;