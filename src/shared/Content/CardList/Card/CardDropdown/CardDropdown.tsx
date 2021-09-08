import * as React from "react";
import styles from "./cardDropdown.less";
import {Dropdown} from "../Dropdown/Dropdown";
import {generateId} from "../../../../../utils/react/generateRandomKey";
import {GenericList} from "../../../../../utils/react/GenericList";
import {merge} from "../../../../../utils/js/merge";
import {iconMessage} from "../../../../../assets/images/icons/iconMessage";
import {iconStop} from "../../../../../assets/images/icons/iconStop";
import {iconShare} from "../../../../../assets/images/icons/iconShare";
import {iconAdd} from "../../../../../assets/images/icons/iconAdd";
import {iconWarning} from "../../../../../assets/images/icons/iconWarning";


const LIST = [
    {As: 'li' as const, text: 'Комментарии', className: `${styles.item} ${styles.comment}`, icon: iconMessage, wrapperIconClass: styles.withIcon},
    {As: 'li' as const, text: 'Поделиться', className: `${styles.item} ${styles.share}`, icon: iconShare, wrapperIconClass: styles.withIcon},
    {As: 'li' as const, text: 'Скрыть', className: `${styles.item} ${styles.hidden}`, icon: iconStop, wrapperIconClass: styles.withIcon},
    {As: 'li' as const, text: 'Сохранить', className: `${styles.item} ${styles.save}`, icon: iconAdd, wrapperIconClass: styles.withIcon},
    {As: 'li' as const, text: 'Пожаловаться', className: `${styles.item} ${styles.compain}`, icon: iconWarning, wrapperIconClass: styles.withIcon},
    {As: 'li' as const, text: 'Закрыть', className: `${styles.item} ${styles.close}`}
].map(generateId)


const dropdownButton = (
    <button className={styles.btn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
        </svg>
    </button>
)

const CardDropdown = () => {
    const [list, setList] = React.useState(LIST)
    const handleOnclick = (id: string) => {
        setList(list.filter((item) => item.id != id))
    }

    return (
        <div className={styles.wrapperButton}>
            <Dropdown
                button={dropdownButton}
                isOpen={false}
                onClose={() => console.log('close')}
                onOpen={() => console.log('open')}
            >
                <ul className={styles.ulReset}>
                    <GenericList list={list.map(merge({onClick: handleOnclick}))}/>
                </ul>
            </Dropdown>
        </div>
    )
}

export default CardDropdown;