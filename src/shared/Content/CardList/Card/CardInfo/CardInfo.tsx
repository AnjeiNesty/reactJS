import * as React from "react";
import styles from "./cardinfo.less";


const CardInfo = () => {
    return (

        <div className={styles.cardInfo}>
            <div className={styles.postAuthor}>
                <div className={styles.nameAvatar}>
                    <a href="#postAuthor" className={styles.default}><img src="https://html5css.ru/howto/img_avatar2.png" alt="avatar"
                                               className={styles.image}/></a>
                    <a href="#postAuthor"><small className={styles.name}>Константин Кодов</small></a>
                </div>
                <small className={styles.pubTime}>
                    <small className={styles.published}>опубликовано </small>
                    8 часов назад
                </small>
            </div>
            <a href="#postLink" className={styles.postCaption}>
                <h2>Реплицированные с зарубежных источников возможности</h2>
            </a>


        </div>

    )

}

export default CardInfo;