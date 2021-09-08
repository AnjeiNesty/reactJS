interface IItem {
    id: string
}

export function assoc<K extends string, T>(key: K, value: T) {
    return <O extends object>(obj: O) => ({
        ...obj,
        [key]: value,
    }) as K extends keyof O ? (Omit<O, K> & Record<K, T> & IItem) : (O & Record<K, T> & IItem);
}

