import * as React from "react";
import styles from "./card.less";
import CardInfo from "./CardInfo/CardInfo";
import CardPreview from "./CardPreview/CardPreview";
import Controls from "./Controls/Controls";
import CardDropdown from "./CardDropdown/CardDropdown";



const Card = () => {
    return (
        <li className={styles.card +' '+ styles.puck}>
            <a href="#postLink" className={styles.postLink}></a>
            <CardInfo />
            <CardPreview />
            <CardDropdown />
            <Controls />
        </li>
    )
}

export default Card;