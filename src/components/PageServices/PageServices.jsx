import React from "react";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import ServicesItem from "./ServicesItem/ServicesItem";
import { ServicesItemList } from "../../data/ServicesItemList";
import styles from "./PageServices.module.css"
function PageServices() {
    return (
        <>
            <HeadingParagraph title="Our Services" text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod tellus nec tellus dictum malesuada. Cras vel condimentum justo. Nulla ullamcorper velit et ornare vehicula." />
            <div className="container">
                <div className={styles.servicesItemsBlock}>
                    {ServicesItemList.map((item) => (
                        <ServicesItem icons={item.icons}
                            title={item.title}
                            text={item.text}
                            url={item.url} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PageServices;