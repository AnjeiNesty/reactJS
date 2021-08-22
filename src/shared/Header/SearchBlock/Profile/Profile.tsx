import * as React from "react";
import styles from "./profile.less";
// import Avatar from "assets/images/avat/ar.png"/

// const Avatar = require('../../../../assets/images/avatar.png')


const Profile = () => {
    return(
        <div className={styles.profile}>
            {/*<img src={Avatar} className={styles.image} alt="avatar"/>*/}
            <span>Константин</span>
        </div>
    )

}

export default Profile;