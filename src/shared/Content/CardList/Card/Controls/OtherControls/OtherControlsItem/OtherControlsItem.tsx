import * as React from "react";
import styles from "./otherControlsItem.less";


class IOtherControlsItem {
    children?: React.ReactNode;
}

const OtherControlsItem = ({children}: IOtherControlsItem) => {
    return (
        <button className={styles.btn}>
            <div className={styles.wrapperIcon}>
                {children}
            </div>
        </button>
    )
}

export default OtherControlsItem;