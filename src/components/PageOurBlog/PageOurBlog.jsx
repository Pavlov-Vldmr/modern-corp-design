import React from "react";
import { BlogPosts } from "../../data/BlogPosts";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import BlogItem from "./BlogItem/BlogItem";
import styles from "./PageOurBlog.module.css"
function PageOurBlog() {
    return (
        <>
            <HeadingParagraph title="Our Blog" text="Sed tempor ligula et metus dapibus molestie. Pellentesque molestie nec lorem sit amet gravida. Mauris augue enim, tristique sit amet vestibulum non, dictum eget erat. Integer consectetur a tellus at tincidunt." />
            <div className="container">
                <div className={styles.ourBlogInner}>
                {
                    
                    BlogPosts.map((items) => (
                        <BlogItem   key={items.post_id}
                                    title={items.title}
                                    text={items.text}
                                    img_ure={items.img_ure}
                                    link={items.link}
                            />
                    ))
                
                    }
                </div>
                
            </div>
        </>
    );
}

export default PageOurBlog;