import * as React from "react";
import styles from "./controls.less";
import CounterLikes from "./CounterLikes/CounterLikes";
import OtherControls from "./OtherControls/OtherControls";
import Messages from "./Messages/Messages";


const Controls = () => {
    return (
        <div className={styles.cardControls}>
            <CounterLikes/>
            <Messages />
            <OtherControls/>
        </div>
    )
}

export default Controls;