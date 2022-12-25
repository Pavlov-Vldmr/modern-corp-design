import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogItem.module.css"

function BlogItem(props) {

    const {

        title,
        text,
        img_ure,
        link,
    } = props
    return (
        <>
            <div className={styles.blogItem}>
                <img src={img_ure} alt="" />
                <span>{title}</span>
                <p>{text}</p>
                <Link tu={link}>Read more</Link>
            </div>
        </>
    );
}

export default BlogItem;