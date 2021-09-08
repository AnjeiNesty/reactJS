import * as React from "react";


export function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        console.log(e)
        e.preventDefault();
        fn(e);
    }
}