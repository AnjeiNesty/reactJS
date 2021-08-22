import * as React from "react";
import styles from "./cardPreview.less";



const CardPreview = () => {
    return (
        <div className={styles.wrapPreview}>
            <img className={styles.preview} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="picture"/>
        </div>
    )
}

export default CardPreview;