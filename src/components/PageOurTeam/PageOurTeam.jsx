import React from "react";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph"
import MemberCard from "./MemberCard/MemberCard";
import styles from "./PageOurTeam.module.css"
import { MemberTeamList } from "../../data/MemberTeamList";

function PageOurTeam() {
    return (
        <>
            <HeadingParagraph title="Meet The Team" text="Sed facilisis non ipsum et interdum. Suspendisse pretium magna sed auctor dictum. Quisque non dignissim metus, non eleifend mi. Proin congue vestibulum elementum. Cras lectus turpis, auctor sit amet elementum at, elementum." />
            <div className="container">
                <div className={styles.teamMemberBlock}>
                    {MemberTeamList.map((items) => (
                        <MemberCard key={items.id}
                            photo_url={items.photo_url}
                            name={items.name}
                            text={items.text}
                            twitter={items.twitter}
                            facebook={items.facebook}
                            google={items.google}
                            pinterest={items.pinterest} />
                    ))}
                </div>

            </div>
        </>
    );
}

export default PageOurTeam;