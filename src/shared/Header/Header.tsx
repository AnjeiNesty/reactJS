import * as React from "react";
import SearchBlock from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";
import styles from './header.less'


class IHeaderProps {
    children?: React.ReactNode;
}

const Header = () => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <SearchBlock/>
                <ThreadTitle/>
                <SortBlock/>
            </header>
        </React.Fragment>

    )

}

export default Header;