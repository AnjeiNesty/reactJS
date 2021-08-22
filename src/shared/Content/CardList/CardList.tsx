import * as React from "react";
import Card from "./Card/Card";
import gStyle from "../../../main.global.less";
import styles from "./cardList.less"


const CardList = () => {
    return (
        <React.Fragment>
            <ul className={gStyle.default + ' ' + styles.cardList}>
                <Card/>
            </ul>
        </React.Fragment>
    )

}

export default CardList;