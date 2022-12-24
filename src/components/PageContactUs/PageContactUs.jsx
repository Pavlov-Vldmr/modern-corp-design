import React from "react";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import styles from "./PageContactUs.module.css"
import ContactUsForm from "./ContactUsForm/ContactUsForm";

function PageContactUs() {
    return (
        <>
            <HeadingParagraph title="Contact US" text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod tellus nec tellus dictum malesuada. Cras vel condimentum justo. Nulla ullamcorper velit et ornare vehicula." />
            <div className="container">
                <div className={styles.contactUsInner}>
                    <div>
                        <h3>Feel free to drop us a line</h3>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        <ContactUsForm/>
                    </div>
                    <div>
                        <h3>Adress</h3>
                        <p>Sed facilisis non ipsum et interdum. Suspendisse pretium magna sed auctor dictum. Quisque non dignissim metus, non eleifend mi.</p>
                        <p>An address here, 100/2 <br />
                            Cityname, 20123 <br />
                            Country <br />
                            P: (0) 123 456 789 <br />
                            E: info@wdsinc.com
                        </p>
                        <div className={styles.googleMap}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3150.507815580997!2d30.31213549562399!3d59.940067263009425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0K3RgNC80LjRgtCw0LY!5e0!3m2!1sru!2sru!4v1671661837199!5m2!1sru!2sru" width="100%" height="204px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageContactUs;