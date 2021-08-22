import * as React from "react";
import styles from "./searchBlock.less";
import Profile from "./Profile/Profile";


const SearchBlock = () => {
    return (
        <div className={styles.search}>
            <Profile/>
        </div>
    )

}

export default SearchBlock;