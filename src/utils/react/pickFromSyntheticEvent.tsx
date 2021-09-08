import * as React from "react";


/*
function Checkbox(props:{ onChange: (value: boolean) => void, value: boolean}) {
    return(
        <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)}/>
    )
}
 */

export function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <E extends keyof T>(key: E) => {
        return <P extends (t: T[E]) => void>(fn: P) => {
            return (e: React.SyntheticEvent<T>) => {
                fn(e.currentTarget[key])
            }
        }
    }
}