import * as React from "react";
import styles from "./content.less";


interface IContentProps {
    children?: React.ReactNode;
}




const Content = ({children}: IContentProps) => {
    return (
        <React.Fragment>
            <main className={styles.content}>
                {children}
            </main>
        </React.Fragment>
    )

}

export default Content;