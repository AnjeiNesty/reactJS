import * as React from "react";


interface IItem {
    id: string;
    text: string;
    onClick: (id: string) => void,
    className: string | Array<string>,
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string,
    icon?: any,
    wrapperIconClass?: string
}

interface IGenericListProps {
    list: IItem[]
}

const noop = () => {}
export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'div',icon,wrapperIconClass, text, onClick = noop, className, id,href}) => (
                <As
                    className={`${className} ${wrapperIconClass}`}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {icon}

                    {text}
                </As>
            ))}
        </>
    )
}