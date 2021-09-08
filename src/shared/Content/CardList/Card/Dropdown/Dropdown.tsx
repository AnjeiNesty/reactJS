import * as React from "react";
import styles from './dropdown.less';


interface IDropdownProps {
    button: React.ReactNode,
    children: React.ReactNode,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
}



const noop = () => {}
export const Dropdown = ({button, children, isOpen, onClose = noop, onOpen = noop}: IDropdownProps) => {
    let [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    return (
        <div className={styles.container}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {button}
            </div>
            {
                isDropdownOpen && (
                    <div className={styles.listContainer}>
                        <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                            {children}
                        </div>
                    </div>
                )
            }

        </div>
    )

}