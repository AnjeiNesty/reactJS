import * as React from "react";
import styles from "./counterLikes.less";


const CounterLikes = () => {
    return (
        <div className={styles.cardControls}>
            <div className={styles.counterLikes}>
                <button className={styles.btn + ' ' + styles.btnUp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                    </svg>
                </button>
                <span className={styles.counter}>101</span>
                <button className={styles.btn + ' ' + styles.btnDown}>
                    <svg className={styles.svgReverse} xmlns="http://www.w3.org/2000/svg" width="19" height="10"
                         viewBox="0 0 19 10" fill="none">
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default CounterLikes;